import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestForFixedAccount } from '../../../redux/actions';
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
import './Fixed.scss';

const FixedAccountPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [investment_period, setInvestmentPeriod] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoadeMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('previousRoute', '/accountpage');
  }, []);

  function setToggleTerms(value: boolean) {
    // eslint-disable-next-line no-console
    console.log(
      '🚀 ~ file: Fixed.tsx ~ line 32 ~ setToggleTerms ~ value',
      value
    );
  }

  function nextRoute(status: any) {
    if (status) {
      history.replace('/confirm');
      return;
    }
    setIsLoading(true);
    setLoadeMessage('');
  }

  function navigateToConfirm() {
    setIsLoading(true);
    setLoadeMessage('Creating account...');
    const user_id = localStorage.getItem('userId');
    dispatch(
      requestForFixedAccount({ investment_period, user_id, amount }, nextRoute)
    );
  }

  function updateAmount(amount: any) {
    setAmount(amount);
  }

  function updateInvestmentPeriod(event: any) {
    const investment_period = event.target.value;
    setInvestmentPeriod(investment_period);
  }
  function goBack() {
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
            handler={goBack}
          />
          <IonContent className="fixed-account-wrapper">
            <div className="fixed-wrapper">
              <div className="page-inner-wrapper">
                <div className="page-header-label">
                  <IonText className="account-no-text">
                    <Translate message="account.fixedPageHeader" />
                  </IonText>
                </div>
              </div>
              <div className="fixed-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposite(Min 5000)"
                  onChange={updateAmount}
                />
                <div className="section-1">
                  <IonText className="section-header">
                    <Translate message="account.investmentPeriod" />
                  </IonText>
                  <IonRadioGroup onIonChange={updateInvestmentPeriod}>
                    <div className="options-section1">
                      <RadioComponent
                        label="12 months with 10%"
                        val="12"
                        showRadioButton={true}
                        showColor={true}
                      />
                    </div>
                    <div className="options-section1">
                      <RadioComponent
                        label="24 months with 20%"
                        val="24"
                        showRadioButton={true}
                        showColor={true}
                      />
                    </div>
                    <div className="options-section1">
                      <RadioComponent
                        label="36 months with 35%"
                        val="36"
                        showRadioButton={true}
                        showColor={true}
                      />
                    </div>
                    <div className="options-section1">
                      <RadioComponent
                        label="48 months with 50%"
                        val="48"
                        showRadioButton={true}
                        showColor={true}
                      />
                    </div>
                    <div className="options-section1">
                      <RadioComponent
                        label="60 monthss with 100%"
                        val="60"
                        showRadioButton={true}
                        showColor={true}
                      />
                    </div>
                  </IonRadioGroup>
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
                    disabled={
                      investment_period.trim() && amount.trim() ? false : true
                    }
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

export { FixedAccountPage };
