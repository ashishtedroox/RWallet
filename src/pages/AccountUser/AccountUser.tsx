import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonItem,
  IonLabel,
} from '@ionic/react';
import debounce from 'lodash.debounce';
import { Translate } from '../../i18n/formatMessages';
import {
  InputText,
  ButtonConmponent,
  SelectMenu,
  HeaderComponent,
  DatePickerComponent,
  LoaderComponent,
} from '../../components';
import './AccountUser.scss';
import {
  loadProvince,
  updateUserDetails,
  fetchdistrictByProvince,
  localLevelName,
} from '../../redux/actions';

const AccountUser: React.FC<any> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dobAD, setDobAD] = useState('');
  const [dobBS, setDobBS] = useState('');
  const [gender, setGender] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [selectedMuniciplaty, setSelectedMuniciplaty] = useState('');
  const [province, setProvince] = useState([{}]);
  const [genderDetails, setGenderDetails] = useState([{}]);
  const [isLoading, setLoadeStatus] = useState(false);
  const [loaderText, setLoaderText] = useState('');
  const [district, setDistricts] = useState([{}]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [localLevelNameArray, setLocalLevelName] = useState([{}]);
  const [selectedCountry, setCountry] = useState('');
  const [clearValueDistrict, setClearValueDistrict] = useState(false);
  const [clearValueLocalLevelName, setClearValueLocalLevelName] =
    useState(false);
  const country = 'Nepal';
  useEffect(() => {
    const array = [
      {
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
    ];
    setGenderDetails(array);
  }, []);

  useEffect(() => {
    setLoadeStatus(true);
    setLoaderText('Please wait...');
    dispatch(loadProvince(setProvinceList));
  }, []);

  function setProvinceList(res: any) {
    const provinces = res.data.data;
    setLoadeStatus(false);
    setLoaderText('');
    configureProvince(provinces);
  }
  function configureProvince(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateProvince(finalArray);
  }

  function loadDistrict(res: any) {
    const districts = res.data.data;
    setLoadeStatus(false);
    setLoaderText('');
    let finalArray: any = [];
    districts.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    setClearValueLocalLevelName(false);
    setClearValueDistrict(false);
    setDistricts(finalArray);
  }

  function loadLocalLevelName(res: any) {
    const localLevelNames = res.data.data;
    setLoadeStatus(false);
    setLoaderText('');
    let finalArray: any = [];
    localLevelNames.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    setLocalLevelName(finalArray);
    setClearValueLocalLevelName(false);
  }

  function nextRoute(status: boolean) {
    setLoadeStatus(false);
    setLoaderText('');
    const getAccountType = localStorage.getItem('accountType');
    const isAccountTypes = localStorage.getItem('isAccountType');
    if (status) {
      localStorage.setItem('userFilledAccountDetails', 'true');

      if (getAccountType === 'false' || isAccountTypes === 'false') {
        history.replace('/accountpage');
        return;
      } else {
        history.replace('/tabs/home');
        return;
      }
    }
  }

  function onGenderSelect(gender: any) {
    setGender(gender);
  }

  function updateFullName(fullName: string) {
    setFullName(fullName.trim());
  }

  function updateFatherName(fatherName: string) {
    setFatherName(fatherName.trim());
  }

  function updateMotherName(motherName: string) {
    setMotherName(motherName.trim());
  }

  function handleDobAD(date: any) {
    setDobAD(date);
    var bs = require('bikram-sambat');

    date = bs.toBik_text(date);

    setDobBS(date);
  }

  function updateCurrentAddress(currentAddress: string) {
    setCurrentAddress(currentAddress);
  }

  function updateHouseNo(val: string) {
    setHouseNo(val);
  }
  function handleCountry(country: any) {
    setCountry(country);
  }
  const handleDistrict = debounce((val: any) => {
    setSelectedDistrict(val);
    setClearValueLocalLevelName(true);
    setSelectedMuniciplaty('');
    setLocalLevelName([{}]);
    dispatch(localLevelName(loadLocalLevelName, val));
  }, 300);

  function handleMunicipality(val: any) {
    setSelectedMuniciplaty(val);
  }

  function updateProvince(array: any) {
    setProvince(array);
  }
  const handleProvince = debounce((val: any) => {
    setSelectedProvince(val);
    setDistricts([{}]);
    setLocalLevelName([{}]);
    setSelectedDistrict('');
    setSelectedMuniciplaty('');
    setClearValueLocalLevelName(true);
    setClearValueDistrict(true);
    dispatch(fetchdistrictByProvince(loadDistrict, val));
  }, 300);

  function updateUser() {
    const userId = localStorage.getItem('userId');
    const payload = {
      user_id: userId,
      father_name: fatherName,
      mother_name: motherName,
      dob: dobAD,
      // dobBS : dobBS,
      current_address: currentAddress,
      house_no: houseNo,
      country: selectedCountry,
      local_level_name: selectedMuniciplaty,
      province: selectedProvince,
      district: selectedDistrict,
    };
    setLoadeStatus(true);
    setLoaderText('Updating....');
    dispatch(updateUserDetails(payload, nextRoute));
  }
  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={loaderText} />
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" showBackButton={false} />

          <IonContent>
            <div className="user-details-container">
              <IonText className="page-header-text">
                <Translate message="account.LableText" />
              </IonText>

              <div className="user-details-field-wrapper">
                <InputText
                  inputType="text"
                  labelText="account.fullName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateFullName}
                />
                <InputText
                  inputType="text"
                  labelText="account.fatherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateFatherName}
                />
                <InputText
                  inputType="text"
                  labelText="account.motherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMotherName}
                />
                <div className="date-picker-wrapper">
                  <DatePickerComponent
                    placeholder="account.dateofBirth"
                    previousDate={true}
                    handler={handleDobAD}
                  />
                </div>

                {/* <div className="date-picker-wrapper">
                  <DatePickerComponent
                    placeholder="account.dateofBirthBS"
                    handler={handleDobBS}
                  />
                </div>
      */}

                <div className="bs-text-area">
                  <IonItem>
                    <IonText className="bs-text-heading">
                      {' '}
                      <Translate message="account.dateofBirthBS" />
                    </IonText>
                    <IonLabel className="bs-text-message">{dobBS}</IonLabel>
                  </IonItem>
                </div>

                <div>
                  <SelectMenu
                    label="signup.gender"
                    onSelect={onGenderSelect}
                    array={genderDetails}
                  />
                </div>
                <InputText
                  inputType="text"
                  labelText="account.currentAddress"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCurrentAddress}
                />
                <div>
                  <SelectMenu
                    label="account.country"
                    array={[
                      {
                        value: country,
                        label: country,
                      },
                    ]}
                    onSelect={handleCountry}
                  />
                </div>
                <SelectMenu
                  label="account.province"
                  array={province}
                  onSelect={handleProvince}
                />
                <div>
                  <SelectMenu
                    label="account.district"
                    array={district}
                    selectedVal={clearValueDistrict}
                    onSelect={handleDistrict}
                  />
                </div>
                <div>
                  <SelectMenu
                    label="account.municipality"
                    array={localLevelNameArray}
                    selectedVal={clearValueLocalLevelName}
                    onSelect={handleMunicipality}
                  />
                </div>
                <InputText
                  inputType="text"
                  labelText="account.houseNo"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateHouseNo}
                />

                <div style={{ marginTop: '30px' }}>
                  <ButtonConmponent
                    buttonLabel="account.proceed"
                    size="block"
                    disabled={
                      fullName.trim() &&
                      fatherName.trim() &&
                      motherName.trim() &&
                      gender &&
                      currentAddress.trim() &&
                      houseNo.trim() &&
                      selectedProvince.trim() &&
                      dobAD &&
                      dobBS &&
                      country &&
                      selectedMuniciplaty
                        ? false
                        : true
                    }
                    clickHandler={updateUser}
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

export { AccountUser };
