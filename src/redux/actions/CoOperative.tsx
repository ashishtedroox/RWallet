import { COOPERATIVE_SUCCESS } from '../Contants';
import { authenticationForCoOperativeBankTransfer } from '../../services/Connect';
import { updateToast } from './index';

const requestForCoOperativeBankTransfer = (
  payload: any,
  nextRoute: Function
) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForCoOperativeBankTransfer(
        payload.user_id,
        payload.province,
        payload.district,
        payload.copName,
        payload.holderName,
        payload.accountNo,
        payload.mobileNo,
        payload.amount,
        payload.remarks
      );
      if (response.status === 200) {
        dispatch({ type: COOPERATIVE_SUCCESS, data: response.data });
        nextRoute(true);
      }
      console.log('done', response);
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'COOPERATIVE_FAILED' });
      dispatch(updateToast(data));
    }
  };
};

export { requestForCoOperativeBankTransfer };
