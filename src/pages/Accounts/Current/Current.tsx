import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonRadioGroup,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Translate } from '../../../i18n/formatMessages';
import {
  HeaderComponent,
  InputText,
  RadioComponent,
  CheckboxComponent,
  ButtonConmponent,
  LoaderComponent,
} from '../../../components';
import { requestForCurrentAccount } from '../../../redux/actions';
import './Current.scss';

const CurrentAccountPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoadeMessage] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    localStorage.setItem('previousRoute', '/accountpage');
  }, []);

  function setToggleTerms(value: boolean) {
    //eslint-disable-next-line no-console
    console.log(
      '🚀 ~ file: Current.tsx ~ line 30 ~ setToggleTerms ~ value',
      value
    );
  }

  function nextRoute(status: any) {
    if (status) {
      history.replace('/confirm');
      return;
    }
    setIsLoading(false);
    setLoadeMessage('');
  }

  function navigateToConfirm() {
    setIsLoading(true);
    setLoadeMessage('Creating account...');
    const user_id = localStorage.getItem('userId');

    dispatch(requestForCurrentAccount({ user_id, amount }, nextRoute));
  }

  function updateAmount(amount: any) {
    setAmount(amount);
  }
  function backButtonHander() {
    history.replace('/accountpage');
  }

  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={backButtonHander}
          />
          <IonContent className="current-account-wrapper">
            <div className="current-wrapper">
              <div className="page-inner-wrapper">
                <div className="page-header-label">
                  <IonText className="account-no-text">
                    <Translate
                      message="account.currentPageHeader"
                      // value={{ accountNo: "07601402201" }}
                    />
                  </IonText>
                </div>
              </div>
              <div className="current-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposite(Min Rs 1000)"
                  onChange={updateAmount}
                />
                <div className="CurrentSection-0">
                  <IonText className="CurrentSection-header">
                    <Translate message="account.minimumAccountBalance" />
                  </IonText>
                  <IonRadioGroup>
                    <div className="options-section1">
                      <RadioComponent
                        showRadioButton={true}
                        label="Rs 5000 per quarter for non-rural"
                        val="5000"
                        showColor={true}
                      />
                    </div>
                    <div className="options-section1">
                      <RadioComponent
                        showRadioButton={true}
                        label="Rs 2500 per quarter for rural"
                        val="2500"
                        showColor={true}
                      />
                    </div>
                  </IonRadioGroup>
                  <IonText className="CurrentSection-last">
                    <Translate message="account.currentWithdrawlimit" />
                  </IonText>
                  <br />
                  <IonText className="CurrentSection-last1">
                    <Translate message="account.currentUnlimited" />
                  </IonText>
                </div>
                <div className="terms-select-wrapper">
                  <CheckboxComponent
                    onCheckboxToggle={setToggleTerms}
                    checkboxLabel="signup.checkboxTermsText"
                  />
                </div>
                <div
                  style={{
                    marginTop: '10px',
                    bottom: '10px',
                    width: '100%;',
                    left: '0',
                    padding: '30px',
                  }}
                >
                  <ButtonConmponent
                    buttonLabel="account.openAccount"
                    size="block"
                    disabled={amount.trim() ? false : true}
                    clickHandler={navigateToConfirm}
                  />
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { CurrentAccountPage };
