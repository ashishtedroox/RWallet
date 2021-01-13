import React from 'react';
// import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,

} from '@ionic/react';
import {FlightIcon,} from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import { ButtonConmponent,InputText, HeaderComponent , } from '../../../../components';
import './FlightOneWay.scss';

const FlightOneWay: React.FC = () => {
  // const history = useHistory();

  //   function handleproceed() {
  //     console.log('Handling registration');
  //     history.push('/');
  //   }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="booking-oneWay-text-area">
                <Translate message="UtilityFlightBooking" />
              </IonText>
              <div className="booking-oneWay-wrapper">
                <div className="booking-section">
                  <div className="booking-from">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightFrom"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                  <div className="flight-icon">
                    <IonText className="profile-icon-wrapper">
                      <FlightIcon width="140" height="140" />
                    </IonText>
                  </div>
                  <div className="booking-to">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightTo"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                </div>
                <div  className="departure-area">
                  <InputText
                    inputType="text"
                    labelText="UtilityDeparture"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                  />
                  <InputText
                    inputType="text"
                    labelText="UtilityTravellers"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                  />
                  <InputText
                    inputType="text"
                    labelText="UtilityClass"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                  />
                </div>
                
                <div className="booking-button">
                  <ButtonConmponent
                    buttonLabel="UtilityBookFlight"
                    size="block"
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

export { FlightOneWay };
