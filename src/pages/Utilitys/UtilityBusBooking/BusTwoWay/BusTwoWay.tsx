import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { BusBookingIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  DatePickerComponent,
  SelectMenu,
  LoaderComponent,
} from '../../../../components';
import './BusTwoWay.scss';
import { useDispatch } from 'react-redux';
import { requestForFlightOneWayPage } from '../../../../redux/actions';

const BusTwoWay: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [sourceCity, setSourceCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const [travelers, setTravelers] = useState('');
  const [travellersDetails, setTravellersDetails] = useState([{}]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const array = [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
    ];

    setTravellersDetails(array);
  }, []);

  function updateSourceCity(sourceCity: any) {
    console.log('sourceCity: ', sourceCity);
    setSourceCity(sourceCity);
  }

  function updateDestinationCity(destCity: any) {
    console.log('destCity: ', destCity);
    setDestCity(destCity);
  }

  function handleDepartureDate(departureDate: any) {
    console.log('departureDate: ', departureDate);
    setDepartureDate(departureDate);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      //history.replace('/tabs/busTwoWay');
      return;
    }
  }

  function handleBusTwoWayBooking() {
    const user_id = 2;
    const roundTrip = '1';
    const travelType = 'Bus';
    const classForFlight = 'empty';
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForFlightOneWayPage(
        {
          user_id,
          returnDate,
          roundTrip,
          travelType,
          sourceCity,
          destCity,
          departureDate,
          travelers,
          classForFlight,
        },
        nextRoute
      )
    );
    console.log('Handling registration');
  }

  function handleReturnDate(returnDate: any) {
    console.log('returnDate: ', returnDate);
    setReturnDate(returnDate);
  }
  function onTravellerSelect(travelers: any) {
    console.log('Selected value: ', travelers);
    setTravelers(travelers);
  }
  function handleToggle(toggle: any) {
    toggle = !toggle;
    setToggle(toggle);
    history.replace('/tabs/busOneWay');
  }
  function goBack() {
    history.replace('/tabs/busOneWay');
  }
  return (
    <>
      <LoaderComponent
        showLoading={showLoading}
        loaderMessage={loaderMessage}
      />
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="container">
              <IonText className="booking-twoWay-text-area">
                <Translate message="UtilityBusBooking" />
              </IonText>

              <div
                className="toggelButton"
                style={{ width: '60%', display: 'flex', marginTop: '5%' }}
              >
                <ButtonConmponent
                  buttonLabel="One Way"
                  size="large"
                  color={!toggle ? 'light' : ''}
                  clickHandler={handleToggle}
                  style={{ fontSize: '16px', width: '118% ', height: '2rem' }}
                />
                <ButtonConmponent
                  buttonLabel=" Two Way"
                  size="large"
                  style={{
                    position: 'fixed',
                    color: 'white',
                    fontSize: '16px',
                    width: '50%',
                    height: '2.2rem',
                  }}
                  color={toggle ? 'light' : ''}
                />
              </div>

              <div
                className="booking-twoWay-wrapper"
                style={{ marginTop: '15px' }}
              >
                <div className="booking-twoWay-section">
                  <div className="booking-twoWay-from">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightFrom"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                      onChange={updateSourceCity}
                    />
                  </div>
                  <div className="flight-twoWay-icon">
                    <IonText className="profile-icon-wrapper">
                      <BusBookingIcon width="140" height="140" />
                    </IonText>
                  </div>
                  <div className="booking-twoWay-to">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightTo"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                      onChange={updateDestinationCity}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', marginTop: '5%' }}>
                  <div className="flight-departure" style={{ width: '45%' }}>
                    <DatePickerComponent
                      placeholder="UtilityDeparture"
                      handler={handleDepartureDate}
                    />
                  </div>
                  <div
                    className="flight-return"
                    style={{ width: '45%', marginLeft: '40px' }}
                  >
                    <DatePickerComponent
                      placeholder="UtilityReturn"
                      handler={handleReturnDate}
                    />
                  </div>{' '}
                </div>

                <div
                  className="departure-twoWay-area"
                  style={{ width: '45%', marginTop: '5%' }}
                >
                  <SelectMenu
                    label="UtilityTravellers"
                    onSelect={onTravellerSelect}
                    array={travellersDetails}
                  />
                </div>
                <div className="flightTwoWayButton">
                  <ButtonConmponent
                    buttonLabel="UtilityBus"
                    size="block"
                    clickHandler={handleBusTwoWayBooking}
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

export { BusTwoWay };
