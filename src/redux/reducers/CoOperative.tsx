import produce from 'immer';
import {
  AUTHENTICATION_INPROGRESS,
  COOPERATIVE_SUCCESS,
  COOPERATIVE_FAILED,
} from '../Contants';
interface CoOperativeState {
  isAuthenticating: boolean;
}

// defines the initial state for the reducer ...
export const initialState: CoOperativeState = {
  isAuthenticating: false,
};

// defines this reducers reducer functions ...
const reducers: any = {
  [AUTHENTICATION_INPROGRESS]: (draft: any) => {
    draft.isAuthenticating = true;
  },
  [COOPERATIVE_SUCCESS]: (draft: any, data: any) => {
    draft.isAuthenticating = false;
    localStorage.setItem('COOPERATIVE DETAILS:', JSON.stringify(data));
  },
  [COOPERATIVE_FAILED]: (draft: any) => {
    draft.isAuthenticating = false;
  },
};

// defines all reducers for actions of interest to the this reducer ...
export default produce((draft: CoOperativeState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});
