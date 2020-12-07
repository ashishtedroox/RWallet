import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  LoginPage,
  SignUpPage,
  OtpPage,
  MpinPage,
  FixedAccountPage,
  TabViewPage,
  ResetPassword,
  AccountUser,
  AccountPage
} from './index';
import './Routes.scss';



const Routes: React.FC = () => {
  const isTabView = true;
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/register" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/otp" component={OtpPage} />
        <Route path="/mpin" component={MpinPage} />
        <Route path="/accountuser" component={AccountUser}/>
        <Route path="/accountpage" component={AccountPage}/>
        <Route path="/account/fixed" component={FixedAccountPage} />
        <Route path="/tabs" component={isTabView ? TabViewPage : TabViewPage} />
        <Redirect exact from="/" to="/register" />
        <Route path="/reset" component={ResetPassword}/>
        {/* <Redirect exact from="/login" to="/dashboard" /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;