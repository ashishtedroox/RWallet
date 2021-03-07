import { RESETPASSWORD_SUCCESS } from '../Contants';
import { authenticationForResetPassword } from '../../services/Connect';
import { updateToast } from './index';

const requestForResetPassword = (payload: any, nextRoute: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await authenticationForResetPassword(
        payload.mobileNo,
        payload.newPass
      );
      if (response.status === 200) {
        dispatch({ type: RESETPASSWORD_SUCCESS, data: response.data });
        nextRoute(true);
      }
    } catch (error) {
      nextRoute(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: 'RESETPASSWORD_FAILED' });
      dispatch(updateToast(data));
    }
  };
};
export { requestForResetPassword };