import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  EMI_SUCCESS,
  EMI_FAILED,
} from '../Contants';
interface EmiPageState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: EmiPageState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [EMI_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('Apply Details :', JSON.stringify(data));
  },
  [EMI_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: EmiPageState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});