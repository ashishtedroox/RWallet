import { INTERNET_PAYMENT_SUCCESS } from '../Contants';
import { authenticationForInternetPayment } from '../../services/Connect';
import { updateToast } from './index';

const requestForInternetPayment = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForInternetPayment(
        payload.user_id,
        payload.amount,
        payload.companyName,
        payload.customerId
      );

      if (response.status === 200 && response.data.success) {
        dispatch({ type: INTERNET_PAYMENT_SUCCESS, data: response.data });
        localStorage.setItem('userCreatedAccount', 'true');
        nextRoute(true, response.data);
      } else {
        const data = {
          showToast: true,
          toastMessage: response.data.message,
          position: 'top',
          duration: '10000',
        };
        dispatch({ type: 'INTERNET_PAYMENT_FAILED' });
        dispatch(updateToast(data));
        nextRoute(false);
      }
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'Network error',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'INTERNET_PAYMENT_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForInternetPayment };
