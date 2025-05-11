import React, { useState } from 'react';
import Field from './Field';
import ProgressBar from './ProgressBar';
import '../App.css'; // Ensure CSS is imported

const RiderRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 16; // Total number of steps

  // State for each step
  const [basicInfo, setBasicInfo] = useState({
    registrationType: '',
    fullName: '',
    email: '',
    phone: '',
    fathersName: '',
    dob: '',
    gender: '',
  });

  const [addressInfo, setAddressInfo] = useState({
    street: '',
    landmark: '',
    city: '',
    district: '',
    state: '',
    postalCode: '',
    country: '',
    location: '',
    zone: '',
    settlement: '',
  });

  const [identificationInfo, setIdentificationInfo] = useState({
    panNumber: '',
    aadharNumber: '',
    drivingLicense: '',
    policeVerification: '',
    passportNumber: '',
    voterID: '',
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    vehicleType: '',
    registrationNumber: '',
    vehicleName: '',
    vehicleModel: '',
    vehicleColor: '',
    insuranceValidity: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    accountType: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    paymentMethod: '',
    upiID: '',
  });

  const [workPreferences, setWorkPreferences] = useState({
    preferredWorkArea: [],
    workType: '',
    availability: '',
    workingDays: [],
    maxDailyHours: '',
    workOnWeekends: false,
    workOnHolidays: false,
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    educationLevel: '',
    maritalStatus: '',
    spouseName: '',
    occupation: '',
    workplace: '',
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactNumber: '',
  });

  const [documents, setDocuments] = useState({
    profilePicture: null,
    accountStatements: null,
    panCard: null,
    aadharCard: null,
    drivingLicense: null,
    policeVerification: null,
    vehicleRC: null,
    insuranceCopy: null,
    otherDocuments: null,
  });

  const [referralInfo, setReferralInfo] = useState({
    referralSource: '',
    sponsorType: '',
    sponsorID: '',
    sponsorName: '',
    sponsorContact: '',
    contactMethod: '',
    previousExperience: '',
    experienceYears: '',
    previousEmployer: '',
  });

  const [accountInfo, setAccountInfo] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    securityAnswer: '',
  });

  const [agreement, setAgreement] = useState(false);

  // Handlers for each step
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  // Render the content for each step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Field label="Are You Registering As A" type="select" options={['Select', 'Rider']} value={basicInfo.registrationType} onChange={(e) => setBasicInfo({ ...basicInfo, registrationType: e.target.value })} required />
          </>
        );
      case 2:
        return (
          <>
            <Field label="Full Name" type="text" value={basicInfo.fullName} onChange={(e) => setBasicInfo({ ...basicInfo, fullName: e.target.value })} required />
            <Field label="Email Address" type="email" value={basicInfo.email} onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })} required />
            <Field label="Phone Number" type="tel" value={basicInfo.phone} onChange={(e) => setBasicInfo({ ...basicInfo, phone: e.target.value })} required />
            <Field label="Father's Name" type="text" value={basicInfo.fathersName} onChange={(e) => setBasicInfo({ ...basicInfo, fathersName: e.target.value })} required />
            <Field label="Date of Birth" type="date" value={basicInfo.dob} onChange={(e) => setBasicInfo({ ...basicInfo, dob: e.target.value })} required />
            <Field label="Gender" type="select" options={['Select', 'Male', 'Female', 'Other']} value={basicInfo.gender} onChange={(e) => setBasicInfo({ ...basicInfo, gender: e.target.value })} required />
          </>
        );
      case 3:
        return (
          <>
            <Field label="Street Address" type="text" value={addressInfo.street} onChange={(e) => setAddressInfo({ ...addressInfo, street: e.target.value })} required />
            <Field label="Landmark" type="text" value={addressInfo.landmark} onChange={(e) => setAddressInfo({ ...addressInfo, landmark: e.target.value })} required />
            <Field label="City" type="text" value={addressInfo.city} onChange={(e) => setAddressInfo({ ...addressInfo, city: e.target.value })} required />
            <Field label="District" type="text" value={addressInfo.district} onChange={(e) => setAddressInfo({ ...addressInfo, district: e.target.value })} required />
            <Field label="State" type="select" options={['Select', 'State1', 'State2']} value={addressInfo.state} onChange={(e) => setAddressInfo({ ...addressInfo, state: e.target.value })} required />
            <Field label="Postal Code" type="text" value={addressInfo.postalCode} onChange={(e) => setAddressInfo({ ...addressInfo, postalCode: e.target.value })} required />
            <Field label="Country" type="select" options={['Select', 'Country1', 'Country2']} value={addressInfo.country} onChange={(e) => setAddressInfo({ ...addressInfo, country: e.target.value })} required />
            <Field label="Location" type="select" options={['Select', 'Location1', 'Location2']} value={addressInfo.location} onChange={(e) => setAddressInfo({ ...addressInfo, location: e.target.value })} required />
            <Field label="Zone" type="select" options={['Select', 'Zone1', 'Zone2']} value={addressInfo.zone} onChange={(e) => setAddressInfo({ ...addressInfo, zone: e.target.value })} required />
            <Field label="Settlement" type="select" options={['Select', 'Settlement1', 'Settlement2']} value={addressInfo.settlement} onChange={(e) => setAddressInfo({ ...addressInfo, settlement: e.target.value })} required />
          </>
        );
      case 4:
        return (
          <>
            <Field label="PAN Number" type="text" value={identificationInfo.panNumber} onChange={(e) => setIdentificationInfo({ ...identificationInfo, panNumber: e.target.value })} required />
            <Field label="Aadhar Card Number" type="text" value={identificationInfo.aadharNumber} onChange={(e) => setIdentificationInfo({ ...identificationInfo, aadharNumber: e.target.value })} required />
            <Field label="Driving License Number" type="text" value={identificationInfo.drivingLicense} onChange={(e) => setIdentificationInfo({ ...identificationInfo, drivingLicense: e.target.value })} required />
            <Field label="Police Verification Certificate" type="text" value={identificationInfo.policeVerification} onChange={(e) => setIdentificationInfo({ ...identificationInfo, policeVerification: e.target.value })} required />
            <Field label="Passport Number (Optional)" type="text" value={identificationInfo.passportNumber} onChange={(e) => setIdentificationInfo({ ...identificationInfo, passportNumber: e.target.value })} />
            <Field label="Voter ID Number (Optional)" type="text" value={identificationInfo.voterID} onChange={(e) => setIdentificationInfo({ ...identificationInfo, voterID: e.target.value })} />
          </>
        );
      case 5:
        return (
          <>
            <Field label="Vehicle Type" type="text" value={vehicleInfo.vehicleType} onChange={(e) => setVehicleInfo({ ...vehicleInfo, vehicleType: e.target.value })} required />
            <Field label="Vehicle Registration Number" type="text" value={vehicleInfo.registrationNumber} onChange={(e) => setVehicleInfo({ ...vehicleInfo, registrationNumber: e.target.value })} required />
            <Field label="Vehicle Name" type="text" value={vehicleInfo.vehicleName} onChange={(e) => setVehicleInfo({ ...vehicleInfo, vehicleName: e.target.value })} required />
            <Field label="Vehicle Model" type="text" value={vehicleInfo.vehicleModel} onChange={(e) => setVehicleInfo({ ...vehicleInfo, vehicleModel: e.target.value })} required />
            <Field label="Vehicle Color" type="text" value={vehicleInfo.vehicleColor} onChange={(e) => setVehicleInfo({ ...vehicleInfo, vehicleColor: e.target.value })} required />
            <Field label="Vehicle Insurance Validity" type="date" value={vehicleInfo.insuranceValidity} onChange={(e) => setVehicleInfo({ ...vehicleInfo, insuranceValidity: e.target.value })} required />
          </>
        );
      case 6:
        return (
          <>
            <Field label="Type of Account" type="select" options={['Select', 'Savings', 'Current']} value={paymentInfo.accountType} onChange={(e) => setPaymentInfo({ ...paymentInfo, accountType: e.target.value })} required />
            <Field label="Bank Name" type="text" value={paymentInfo.bankName} onChange={(e) => setPaymentInfo({ ...paymentInfo, bankName: e.target.value })} required />
            <Field label="Bank Account Number" type="text" value={paymentInfo.accountNumber} onChange={(e) => setPaymentInfo({ ...paymentInfo, accountNumber: e.target.value })} required />
            <Field label="IFSC Code" type="text" value={paymentInfo.ifscCode} onChange={(e) => setPaymentInfo({ ...paymentInfo, ifscCode: e.target.value })} required />
            <Field label="Preferred Payment Method" type="select" options={['Select', 'UPI', 'Bank Transfer']} value={paymentInfo.paymentMethod} onChange={(e) => setPaymentInfo({ ...paymentInfo, paymentMethod: e.target.value })} required />
            <Field label="UPI ID (Optional)" type="text" value={paymentInfo.upiID} onChange={(e) => setPaymentInfo({ ...paymentInfo, upiID: e.target.value })} />
          </>
        );
      case 7:
        return (
          <>
            <Field label="Preferred Work Area" type="select" options={['Select', 'City', 'Locality', 'PIN Code']} value={workPreferences.preferredWorkArea} onChange={(e) => setWorkPreferences({ ...workPreferences, preferredWorkArea: e.target.value })} required />
            <Field label="Work Type" type="select" options={['Select', 'Full-time', 'Part-time', 'On-demand']} value={workPreferences.workType} onChange={(e) => setWorkPreferences({ ...workPreferences, workType: e.target.value })} required />
            <Field label="Availability" type="select" options={['Select', 'Morning', 'Afternoon', 'Evening', 'Night', 'Flexible']} value={workPreferences.availability} onChange={(e) => setWorkPreferences({ ...workPreferences, availability: e.target.value })} required />
            <Field label="Preferred Working Days" type="select" options={['Select', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} value={workPreferences.workingDays} onChange={(e) => setWorkPreferences({ ...workPreferences, workingDays: e.target.value })} required />
            <Field label="Maximum Daily Working Hours" type="select" options={['Select', '2-4 hrs', '4-6 hrs', '6-8 hrs', '8+ hrs']} value={workPreferences.maxDailyHours} onChange={(e) => setWorkPreferences({ ...workPreferences, maxDailyHours: e.target.value })} required />
            <Field label="Willing to Work on Weekends?" type="select" options={['Select', 'Yes', 'No']} value={workPreferences.workOnWeekends ? 'Yes' : 'No'} onChange={(e) => setWorkPreferences({ ...workPreferences, workOnWeekends: e.target.value === 'Yes' })} required />
            <Field label="Willing to Work on Holidays?" type="select" options={['Select', 'Yes', 'No']} value={workPreferences.workOnHolidays ? 'Yes' : 'No'} onChange={(e) => setWorkPreferences({ ...workPreferences, workOnHolidays: e.target.value === 'Yes' })} required />
          </>
        );
      case 8:
        return (
          <>
            <Field label="Level of Education" type="select" options={['Select', 'High School', 'Graduate', 'Postgraduate']} value={additionalInfo.educationLevel} onChange={(e) => setAdditionalInfo({ ...additionalInfo, educationLevel: e.target.value })} required />
            <Field label="Marital Status" type="select" options={['Select', 'Single', 'Married']} value={additionalInfo.maritalStatus} onChange={(e) => setAdditionalInfo({ ...additionalInfo, maritalStatus: e.target.value })} required />
            <Field label="Spouse Name" type="text" value={additionalInfo.spouseName} onChange={(e) => setAdditionalInfo({ ...additionalInfo, spouseName: e.target.value })} />
            <Field label="Occupation" type="text" value={additionalInfo.occupation} onChange={(e) => setAdditionalInfo({ ...additionalInfo, occupation: e.target.value })} />
            <Field label="Workplace Name" type="text" value={additionalInfo.workplace} onChange={(e) => setAdditionalInfo({ ...additionalInfo, workplace: e.target.value })} />
            <Field label="Emergency Contact Person Name" type="text" value={additionalInfo.emergencyContactName} onChange={(e) => setAdditionalInfo({ ...additionalInfo, emergencyContactName: e.target.value })} />
            <Field label="Relationship" type="select" options={['Select', 'Family', 'Friend', 'Colleague']} value={additionalInfo.emergencyContactRelation} onChange={(e) => setAdditionalInfo({ ...additionalInfo, emergencyContactRelation: e.target.value })} required />
            <Field label="Emergency Contact Phone Number" type="tel" value={additionalInfo.emergencyContactNumber} onChange={(e) => setAdditionalInfo({ ...additionalInfo, emergencyContactNumber: e.target.value })} required />
          </>
        );
      case 9:
        return (
          <>
            <Field label="Profile Picture" type="file" onChange={(e) => setDocuments({ ...documents, profilePicture: e.target.files[0] })} required />
            <Field label="Account Statements" type="file" onChange={(e) => setDocuments({ ...documents, accountStatements: e.target.files[0] })} required />
            <Field label="PAN Card" type="file" onChange={(e) => setDocuments({ ...documents, panCard: e.target.files[0] })} required />
            <Field label="Aadhar Card" type="file" onChange={(e) => setDocuments({ ...documents, aadharCard: e.target.files[0] })} required />
            <Field label="Driving License" type="file" onChange={(e) => setDocuments({ ...documents, drivingLicense: e.target.files[0] })} required />
            <Field label="Police Verification Certificate" type="file" onChange={(e) => setDocuments({ ...documents, policeVerification: e.target.files[0] })} required />
            <Field label="Vehicle RC (Registration Certificate)" type="file" onChange={(e) => setDocuments({ ...documents, vehicleRC: e.target.files[0] })} required />
            <Field label="Insurance Copy" type="file" onChange={(e) => setDocuments({ ...documents, insuranceCopy: e.target.files[0] })} required />
            <Field label="Others (Optional)" type="file" onChange={(e) => setDocuments({ ...documents, otherDocuments: e.target.files[0] })} />
          </>
        );
      case 10:
        return (
          <>
            <Field label="How Did You Hear About Us?" type="select" options={['Select', 'Referral', 'Advertisement', 'Social Media']} value={referralInfo.referralSource} onChange={(e) => setReferralInfo({ ...referralInfo, referralSource: e.target.value })} required />
            {referralInfo.referralSource === 'Referral' && (
              <>
                <Field label="Sponsor Type" type="select" options={['Select', 'Individual', 'Company']} value={referralInfo.sponsorType} onChange={(e) => setReferralInfo({ ...referralInfo, sponsorType: e.target.value })} required />
                <Field label="Sponsor ID" type="text" value={referralInfo.sponsorID} onChange={(e) => setReferralInfo({ ...referralInfo, sponsorID: e.target.value })} required />
                <Field label="Sponsor Name" type="text" value={referralInfo.sponsorName} onChange={(e) => setReferralInfo({ ...referralInfo, sponsorName: e.target.value })} required />
                <Field label="Sponsor Contact Number" type="tel" value={referralInfo.sponsorContact} onChange={(e) => setReferralInfo({ ...referralInfo, sponsorContact: e.target.value })} required />
              </>
            )}
            <Field label="How would you like to be contacted?" type="select" options={['Select', 'Phone', 'Email']} value={referralInfo.contactMethod} onChange={(e) => setReferralInfo({ ...referralInfo, contactMethod: e.target.value })} required />
            <Field label="Previous Experience" type="select" options={['Select', 'Yes', 'No']} value={referralInfo.previousExperience} onChange={(e) => setReferralInfo({ ...referralInfo, previousExperience: e.target.value })} required />
            {referralInfo.previousExperience === 'Yes' && (
              <>
                <Field label="If yes, please describe of Years" type="text" value={referralInfo.experienceYears} onChange={(e) => setReferralInfo({ ...referralInfo, experienceYears: e.target.value })} required />
                <Field label="Previous Employer Name" type="text" value={referralInfo.previousEmployer} onChange={(e) => setReferralInfo({ ...referralInfo, previousEmployer: e.target.value })} required />
              </>
            )}
          </>
        );
      case 11:
        return (
          <>
            <Field label="Username (Preferred)" type="text" value={accountInfo.username} onChange={(e) => setAccountInfo({ ...accountInfo, username: e.target.value })} required />
            <Field label="Password" type="password" value={accountInfo.password} onChange={(e) => setAccountInfo({ ...accountInfo, password: e.target.value })} required />
            <Field label="Confirm Password" type="password" value={accountInfo.confirmPassword} onChange={(e) => setAccountInfo({ ...accountInfo, confirmPassword: e.target.value })} required />
            <Field label="Security Question" type="select" options={['Select', 'Your first pet\'s name?', 'Your mother\'s maiden name?']} value={accountInfo.securityQuestion} onChange={(e) => setAccountInfo({ ...accountInfo, securityQuestion: e.target.value })} required />
            <Field label="Security Answer" type="text" value={accountInfo.securityAnswer} onChange={(e) => setAccountInfo({ ...accountInfo, securityAnswer: e.target.value })} required />
          </>
        );
      case 12:
        return (
          <>
            <div className="field">
              <label>
                <input type="checkbox" checked={agreement} onChange={() => setAgreement(!agreement)} />
                I Agree to Terms and Conditions
              </label>
            </div>
            <div className="field">
              <label>
                <input type="checkbox" checked={agreement} onChange={() => setAgreement(!agreement)} />
                I Agree to Provide Authentic Information
              </label>
            </div>
          </>
        );
      case 13:
        return (
          <>
            <div className="agreement">
              <p>I, {basicInfo.fullName}, hereby declare that:</p>
              <p>The information provided in this registration form is accurate, complete, and true to the best of my knowledge. I agree to abide by all company policies, terms, and conditions related to my role as a rider. I understand that any false information or misrepresentation may result in immediate termination of my contract. I consent to background verification, including identity, address, criminal record, and driving history checks. I will ensure the safety and timely delivery of all assigned orders while adhering to traffic and safety regulations. I accept responsibility for any loss or damage caused due to negligence during delivery operations. I agree to return all company assets (if any) upon termination of my contract. I acknowledge that my association with CorpSathi Pvt. Ltd. is on a contractual basis and does not establish an employer-employee relationship. I authorize the company to process my banking details for payments related to my services. I will maintain a professional attitude, ethical conduct, and customer-friendly approach at all times. ✅ I have read and understood the terms & conditions, and I agree to comply with them.</p>
              <p>Signature: _______________________ Date: //______ Place: ___________________</p>
            </div>
          </>
        );
      case 14:
        return (
          <>
            <div className="field btns">
              <button type="button" onClick={handlePrev} disabled={currentStep === 1}>
                Previous
              </button>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <form>
        <div className="page">
          <div className="title">{`Step ${currentStep}`}</div>
          {renderStepContent()}
          {currentStep !== 14 && (
            <div className="field btns">
              <button type="button" onClick={handlePrev} disabled={currentStep === 1}>
                Previous
              </button>
              <button type="button" onClick={handleNext} disabled={currentStep === totalSteps}>
                Next
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RiderRegistrationForm;