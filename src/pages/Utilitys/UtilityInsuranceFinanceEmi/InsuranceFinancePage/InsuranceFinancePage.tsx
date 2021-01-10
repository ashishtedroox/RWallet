import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { ButtonConmponent, HeaderComponent } from '../../../../components';
import './InsuranceFinancePage.scss';


const InsuranceFinancePage: React.FC = () => {
  const history = useHistory();

  function handleroyalFinancialServices() {
    console.log('Handling registration');
    history.push('/royalityFinancialServices');
  }

  function handleroyalitySavingCredit() {
    console.log('Handling registration');
    history.push('/royalitySavingCredit');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="insuranceEmi-text-area">
                <Translate message="InsuranceFinanceEmi" />
              </IonText>
              <div className="InsuranceEmi-Wrapper">
                <div style={{ marginTop: '13px' }}>
                  <ButtonConmponent
                    buttonLabel="RoyalitySaving"
                    size="block"
                    clickHandler={ handleroyalFinancialServices}
                  />
                </div>
                <div style={{ marginTop: '13px' }}>
                  <ButtonConmponent
                    buttonLabel="RoyaliFinancialServices"
                    size="block"
                    clickHandler={handleroyalitySavingCredit}
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

export { InsuranceFinancePage };