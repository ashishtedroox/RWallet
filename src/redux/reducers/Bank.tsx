import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  BANKTRANSFER_SUCCESS,
  BANKTRANSFER_FAILED,
} from '../Contants';
interface BankTransferState {
  isAuthenticating: boolean;
  bankDetails: any;
}

// defines the initial state for the reducer ...
export const initialState: BankTransferState = {
  isAuthenticating: false,
  bankDetails: null,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [BANKTRANSFER_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    draft.bankDetails = data;
  },
  [BANKTRANSFER_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: BankTransferState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
