import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  LoaderComponent,
} from '../../../components';
import './ApplyPage.scss';
import { requestForApplyPage } from '../../../redux/actions';

const ApplyPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [purposeOfLoan, setPurposeOfLoan] = useState('');
  const [loanType, setLoanType] = useState('');

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs/loanType');
  }, []);

  useEffect(() => {
    const params: any = location.state;
    const loanType = params.loantype;

    setLoanType(loanType);
  }, []);

  function updateFullName(fullName: any) {
    setFullName(fullName);
  }
  function updateFatherName(fatherName: any) {
    setFatherName(fatherName);
  }
  function updateMobileNo(mobileNo: any) {
    setMobileNo(mobileNo);
  }
  function updatePurposeOfLoan(purposeOfLoan: any) {
    setPurposeOfLoan(purposeOfLoan);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      alert('your application successfully submitted ! ');
      history.replace('/tabs/home');
      return;
    }
  }

  function handleApply() {
    const user_id = localStorage.getItem('userId');
    // const loanType = "Business Loan";
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForApplyPage(
        { user_id, loanType, fullName, fatherName, mobileNo, purposeOfLoan },
        nextRoute
      )
    );
  }

  function goBack() {
    history.replace('/tabs/loanType');
  }

  function handleDiscardButtonForApply() {
    setFullName('');
    setFatherName('');
    setMobileNo('');
    setPurposeOfLoan('');
    setLoanType('');
    let applyInpuFields: any = document.getElementsByTagName('ion-input');
    for (var i = 0; i < applyInpuFields.length; ++i) {
      if (applyInpuFields[i].id === 'input-area') applyInpuFields[i].value = '';
    }
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
            <div className="apply-page-container">
              <IonText className="Loan-ApplyPage-text-area">
                <Translate message="LoanApplyPage" />
              </IonText>
              <div className="Loan-ApplyPage-wrapper">
                <InputText
                  inputType="text"
                  labelText="LoanFullName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateFullName}
                  clearInput={true}
                />
                <InputText
                  inputType="text"
                  labelText="LoanFatherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateFatherName}
                  clearInput={true}
                />
                <InputText
                  inputType="tel"
                  labelText="LoanMobileNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMobileNo}
                  clearInput={true}
                />
                <InputText
                  inputType="text"
                  labelText="PurposeLoan"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updatePurposeOfLoan}
                  clearInput={true}
                />
              </div>
              <div className="bottom-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="ApplyPageDiscard"
                  size="block"
                  clickHandler={handleDiscardButtonForApply}
                />

                <ButtonConmponent
                  buttonLabel="ApplyPageApply"
                  size="block"
                  disabled={
                    fullName.trim() &&
                    fatherName.trim() &&
                    mobileNo.trim() &&
                    purposeOfLoan.trim()
                      ? false
                      : true
                  }
                  clickHandler={handleApply}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { ApplyPage };
