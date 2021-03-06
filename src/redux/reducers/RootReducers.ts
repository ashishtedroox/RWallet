import { combineReducers } from 'redux';
import LoginReducer from './Login';
import Toast from './Toast';
import UserAccount from './UserAccount';
import Bank from './Bank';
import CoOperative from './CoOperative';
import Agent from './Agent';
import EmiCalculater from './EmiCalculater';
import Profile from './Profile';
import Loader from './Loader';
import Saving from './Saving';
import Current from './Current';
import Fixed from './Fixed';
import History from './TransactionHistory';
const rootReducer = combineReducers({
  login: LoginReducer,
  toast: Toast,
  userAccount: UserAccount,
  bank: Bank,
  co_operative: CoOperative,
  agent: Agent,
  emi: EmiCalculater,
  profile: Profile,
  savingAccount: Saving,
  currentAccount: Current,
  fixedAccount: Fixed,
  loader: Loader,
  history: History,
});
export default rootReducer;
