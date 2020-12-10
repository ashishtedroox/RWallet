import React from 'react';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonRadioGroup,
} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  HeaderComponent,
  InputText,
  RadioComponent,
  CheckboxComponent,
  ButtonConmponent,
} from '../../../components';

import './Fixed.scss';

const FixedAccountPage: React.FC = () => {
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }

  return (
    <div>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent className="fixed-account-wrapper">
            <div className="page-wrapper">
              <div className="page-inner-wrapper">
                <div className="page-header-label">
                  <IonText className="account-no-text ion-text-left">
                    <Translate
                      message="account.fixedPageHeader"
                      value={{ accountNo: '07601402201' }}
                    />
                  </IonText>
                </div>
              </div>
              <div className="page-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposit"
                />
                <div className="section-1">
                  <IonText className="sections-heading">
                    <Translate message="account.investmentPeriod" />
                  </IonText>
                  <div className="fixed-radio-options">
                    <IonRadioGroup>
                      <div className="options-section1">
                        <RadioComponent label="18 Months and 5.00%"/>
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="12 Months and 4.90%" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="06 Months and 3.50%" />
                      </div>
                    </IonRadioGroup>
                  </div>
                </div>
                <div className="section-2">
                  <IonText className="sections-heading">
                    <Translate message="account.interestPayout" />
                  </IonText>
                  <div className="fixed-radio-options">
                    <IonRadioGroup>
                      <div className="options-section1">
                        <RadioComponent label="Monthly" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="Quarterly" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="On maturity" />
                      </div>
                    </IonRadioGroup>
                  </div>
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
                    size="full"
                  />
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </div>
  );
};

export { FixedAccountPage };
