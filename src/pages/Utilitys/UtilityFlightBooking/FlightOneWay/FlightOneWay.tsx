import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import debounce from 'lodash.debounce';
import { useHistory } from 'react-router-dom';
import { FlightIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import { useDispatch } from 'react-redux';
import {
  ButtonConmponent,
  HeaderComponent,
  DatePickerComponent,
  SelectMenu,
  LoaderComponent,
  SegmentButtonComponent,
} from '../../../../components';
import './FlightOneWay.scss';
import {
  requestForFlightOneWayPage,
  loadCityNameForFlight,
} from '../../../../redux/actions';

const FlightOneWay: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('');

  const [classForFlight, setClass] = useState('');
  const [classDetails, setClassDetails] = useState([{}]);

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const [showOneWaySection, setShowOneWaySection] = useState(true);
  const [showTwoWaySection, setShowTwoWaySection] = useState(false);
  const [roundTrip, setRoundTrip] = useState('0');

  const [destinationCity, setDestinationCity] = useState([{}]);
  const [selectedSourceCity, setSelectedSourceCity] = useState('');

  const [selectedDestinationPlace, setSelectedDestinationPlace] = useState('');

  useEffect(() => {
    dispatch(loadCityNameForFlight(setDestinationCityList));
  }, []);

  useEffect(() => {
    const array = [
      {
        value: 'first',
        label: 'First Class',
      },
      {
        value: 'business',
        label: 'Business Class',
      },
      {
        value: 'economy',
        label: 'Economy Class',
      },
    ];

    setClassDetails(array);
  }, []);

  function handleDate(departureDate: any) {
    setDepartureDate(departureDate);
  }
  function handleReturnDate(returnDate: any) {
    setReturnDate(returnDate);
  }
  function onClassSelect(classForFlight: any) {
    setClass(classForFlight);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/home');
      return;
    }
  }

  function handleflightBook() {
    const user_id = localStorage.getItem('userId');
    const travelType = 'flight';

    setShowLoading(true);
    setLoaderMessage('Please Wait...');

    dispatch(
      requestForFlightOneWayPage(
        {
          user_id,
          returnDate,
          roundTrip,
          travelType,
          sourceCity: selectedSourceCity,
          destCity: selectedDestinationPlace,
          departureDate,
          travelers: travelers,
          classForFlight,
        },
        nextRoute
      )
    );
    console.log('Handling registration');
  }

  function goBack() {
    history.replace('/tabs/home');
  }

  function handleTravelersValue(travelers: any) {
    setTravelers(travelers);
  }

  function handleTripDetails(event: any) {
    console.log('event', event.target.value);

    const value = event.target.value;
    console.log('value: ', value);
    if (value === 'one_way') {
      setRoundTrip('0');
      setShowOneWaySection(true);
      setShowTwoWaySection(false);
    } else {
      setRoundTrip('1');
      setShowOneWaySection(false);
      setShowTwoWaySection(true);
    }
  }

  //for selected source  and destination list ................

  function setDestinationCityList(res: any) {
    console.log('setting data: ', res);
    const destinationCitys = res.data.data;
    configureCityList(destinationCitys);
  }
  function configureCityList(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateCityList(finalArray);
  }

  function updateCityList(array: any) {
    setDestinationCity(array);
  }
  const handleSourceCity = debounce((val: any) => {
    console.log('Selected source city: ', val);
    setSelectedSourceCity(val);
  }, 300);

  const handleDestinationCity = debounce((val: any) => {
    console.log('Selected destination city: ', val);
    setSelectedDestinationPlace(val);
  }, 300);

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
            <div className="flight-booking-container">
              <IonText className="booking-oneWay-text-area">
                <Translate message="UtilityFlightBooking" />
              </IonText>
              <div className="toggle-button">
                <SegmentButtonComponent handler={handleTripDetails} />
              </div>
              {showOneWaySection && (
                <div
                  className="booking-oneWay-wrapper"
                  style={{ marginTop: '15px' }}
                >
                  <div className="booking-section">
                    <div
                      className="flight-return"
                      style={{ width: '45%', marginLeft: '0px' }}
                    >
                      <SelectMenu
                        label="UtilityFlightFrom"
                        array={destinationCity}
                        onSelect={handleSourceCity}
                      />
                    </div>

                    <div className="flight-icon">
                      <IonText className="profile-icon-wrapper">
                        <FlightIcon width="140" height="140" />
                      </IonText>
                    </div>

                    <div
                      className="flight-return"
                      style={{ width: '45%', marginLeft: '0px' }}
                    >
                      <SelectMenu
                        label="UtilityFlightTo"
                        array={destinationCity}
                        onSelect={handleDestinationCity}
                      />
                    </div>
                  </div>
                  <div>
                    <div style={{ width: '50%' }} className="departure-area">
                      <DatePickerComponent
                        placeholder="UtilityDeparture"
                        handler={handleDate}
                      />

                      <SelectMenu
                        label="UtilityTravellers"
                        array={[
                          {
                            value: '1',
                            label: 1,
                          },
                          {
                            value: '2',
                            label: 2,
                          },
                        ]}
                        onSelect={handleTravelersValue}
                      />

                      <SelectMenu
                        label="UtilityClass"
                        onSelect={onClassSelect}
                        array={classDetails}
                      />
                    </div>
                  </div>

                  <div className="bookingButtonForFlight">
                    <ButtonConmponent
                      buttonLabel="UtilityBookFlight"
                      size="block"
                      clickHandler={handleflightBook}
                    />
                  </div>
                </div>
              )}
              {showTwoWaySection && (
                <div
                  className="booking-twoWay-wrapper"
                  style={{ marginTop: '15px' }}
                >
                  <div className="booking-twoWay-section">
                    <div style={{ width: '45%', marginLeft: '0px' }}>
                      <SelectMenu
                        label="UtilityFlightFrom"
                        array={destinationCity}
                        onSelect={handleSourceCity}
                      />
                    </div>

                    <div className="flight-twoWay-icon">
                      <IonText className="profile-icon-wrapper">
                        <FlightIcon width="140" height="140" />
                      </IonText>
                    </div>

                    <div style={{ width: '45%', marginLeft: '0px' }}>
                      <SelectMenu
                        label="UtilityFlightTo"
                        array={destinationCity}
                        onSelect={handleDestinationCity}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div className="flight-departure" style={{ width: '45%' }}>
                      <DatePickerComponent
                        placeholder="UtilityDeparture"
                        handler={handleDate}
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
                    style={{ width: '45%' }}
                  >
                    <SelectMenu
                      label="UtilityTravellers"
                      array={[
                        {
                          value: '1',
                          label: 1,
                        },
                        {
                          value: '2',
                          label: 2,
                        },
                      ]}
                      onSelect={handleTravelersValue}
                    />
                    <SelectMenu
                      label="UtilityClass"
                      onSelect={onClassSelect}
                      array={classDetails}
                    />
                  </div>
                  <div className="bookingButtonForFlightTwoWay">
                    <ButtonConmponent
                      buttonLabel="UtilityBookFlight"
                      size="block"
                      clickHandler={handleflightBook}
                    />
                  </div>
                </div>
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { FlightOneWay };
