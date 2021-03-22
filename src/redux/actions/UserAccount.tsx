import { INITIAL_DATA_LOADING } from '../Contants';
import { updateToast } from './Toast';
import {
  getProvinces,
  getDistrictByProvince,
  updateUserAccountDetails,
  getLocalLevelName,
} from '../../services/Connect';

const fetchdistrictByProvince = (callback: Function, id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: INITIAL_DATA_LOADING, data: { status: true } });
    try {
      const response = await getDistrictByProvince(id);
      console.log('*******', response);

      if (response.status === 200 && response.data.success) {
        console.log('Success');

        dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
        localStorage.setItem('districts', JSON.stringify(response));
        callback(response);
      }
      console.log('done', response);
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
const loadProvince = (callback: Function) => {
  return async (dispatch: any) => {
    dispatch({ type: INITIAL_DATA_LOADING, data: { status: true } });
    try {
      const response = await getProvinces();
      if (response.status === 200 && response.data.success) {
        dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
        localStorage.setItem('provinceList', JSON.stringify(response));
        callback(response);
      }
      console.log('done', response);
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
const localLevelName = (callback: Function, id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: INITIAL_DATA_LOADING, data: { status: true } });
    try {
      const response = await getLocalLevelName(id);
      if (response.status === 200 && response.data.success) {
        dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
        localStorage.setItem('localLevelName', JSON.stringify(response));
        callback(response);
      }
      console.log('done', response);
    } catch (error) {
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch({ type: INITIAL_DATA_LOADING, data: { status: false } });
      dispatch(updateToast(data));
    }
  };
};
const updateUserDetails = (payload: any, callback: Function) => {
  return async (dispatch: any) => {
    try {
      const response = await updateUserAccountDetails(payload);
      if (response.status === 200 && response.data.success) {
        localStorage.setItem('userUpdated', JSON.stringify(response));
        callback(true);
      }
      console.log('done', response);
    } catch (error) {
      callback(false);
      const data = {
        showToast: true,
        toastMessage: 'API failed',
        position: 'top',
        duration: '10000',
      };
      dispatch(updateToast(data));
    }
  };
};

export {
  loadProvince,
  updateUserDetails,
  fetchdistrictByProvince,
  localLevelName,
};
