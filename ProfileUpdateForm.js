import React, { useState } from 'react';
import Field from './Field'; // Reusing the Field component
import '../App.css'; // Ensure CSS is imported

const ProfileUpdateForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 11; // Total number of steps in the form

  // State for form fields
  const [accountInfo, setAccountInfo] = useState({
    leadId: '12345', // Example auto-filled value
    leadType: 'Individual', // Example auto-filled value
    createdDate: '2023-01-01', // Example auto-filled value
    lastInteraction: '2023-01-10', // Example auto-filled value
    nextAction: 'Follow Up', // Example auto-filled value
    notes: 'Initial contact made.', // Example auto-filled value
    priority: 'High', // Example auto-filled value
    status: 'Active', // Example auto-filled value
  });

  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'John Doe', // Example auto-filled value
    email: 'john.doe@example.com', // Example auto-filled value
    phone: '1234567890', // Example auto-filled value
    alternatePhone: '0987654321', // Example auto-filled value
    fathersName: '',
    dateOfBirth: '',
    gender: '',
  });

  const [addressInfo, setAddressInfo] = useState({
    streetAddress: '123 Main St', // Example auto-filled value
    landmark: 'Near Park', // Example auto-filled value
    city: 'New York', // Example auto-filled value
    district: 'Manhattan', // Example auto-filled value
    state: 'NY', // Example auto-filled value
    postalCode: '10001', // Example auto-filled value
    country: 'USA', // Example auto-filled value
    location: '',
    zone: '',
    settlement: '',
  });

  const [demographicInfo, setDemographicInfo] = useState({
    levelOfEducation: '',
    maritalStatus: '',
    spouseName: '',
    occupation: '',
    workplaceName: '',
    emergencyContactPersonName: '',
    relationship: '',
    contactPhoneNumber: '',
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    age: '',
    languagesSpoken: '',
    incomeRange: '',
    numberOfDependents: '',
    economicSector: '',
    employmentStatus: '',
    yearsOfExperience: '',
    jobTitle: '',
  });

  const [lifestyleInfo, setLifestyleInfo] = useState({
    hobbies: [],
    interests: [],
    favoritePlatforms: [],
    preferredContentType: [],
    focusOnHealth: [],
    spendingStyle: [],
  });

  const [socialMediaInfo, setSocialMediaInfo] = useState({
    linkedIn: '',
    facebook: '',
    twitter: '',
    instagram: '',
    website: '',
  });

  const [identityInfo, setIdentityInfo] = useState({
    panNumber: '',
    aadharNumber: '',
    passportNumber: '',
    voterIdNumber: '',
    drivingLicenseNumber: '',
  });

  const [contactPreferences, setContactPreferences] = useState({
    preferredContactMethod: 'Email', // Example auto-filled value
    preferredContactTime: 'Morning', // Example auto-filled value
  });

  const [leadSources, setLeadSources] = useState({
    sourceType: 'Referral', // Example auto-filled value
    subType: 'Friend', // Example auto-filled value
  });

  const [sponsorDetails, setSponsorDetails] = useState({
    sponsorId: 'S123', // Example auto-filled value
    sponsorName: 'Jane Smith', // Example auto-filled value
    sponsorContactNumber: '9876543210', // Example auto-filled value
  });

  // Handle Next button click
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle Previous button click
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Update Submitted:', {
      accountInfo,
      personalInfo,
      addressInfo,
      demographicInfo,
      additionalInfo,
      lifestyleInfo,
      socialMediaInfo,
      identityInfo,
      contactPreferences,
      leadSources,
      sponsorDetails,
    });
    alert('Profile Update Submitted Successfully!');
  };

  // Render the progress bar
  const renderProgressBar = () => {
    const steps = [
      'Account Information',
      'Personal Information',
      'Address Information',
      'Demographic Information',
      'Additional Information',
      'Lifestyle',
      'Social Media',
      'Identity Information',
      'Contact Preferences',
      'Lead Sources',
      'Sponsor Details',
    ];

    return (
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index + 1 ? 'active' : ''}`}
          >
            <div className="bullet">{index + 1}</div>
            <div className="check fas fa-check"></div>
            <div className="step-name">{step}</div>
          </div>
        ))}
      </div>
    );
  };

  // Render the content for each step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="title">Account Information</div>
            <Field label="Lead ID" type="text" value={accountInfo.leadId} readOnly />
            <Field label="Lead Type" type="text" value={accountInfo.leadType} readOnly />
            <Field label="Created Date" type="text" value={accountInfo.createdDate} readOnly />
            <Field label="Last Interaction" type="text" value={accountInfo.lastInteraction} readOnly />
            <Field label="Next Action" type="text" value={accountInfo.nextAction} readOnly />
            <Field label="Notes" type="text" value={accountInfo.notes} readOnly />
            <Field label="Priority" type="text" value={accountInfo.priority} readOnly />
            <Field label="Status" type="text" value={accountInfo.status} readOnly />
          </>
        );
      case 2:
        return (
          <>
            <div className="title">Personal Information</div>
            <Field label="Full Name" type="text" value={personalInfo.fullName} readOnly />
            <Field label="Email Address" type="email" value={personalInfo.email} readOnly />
            <Field label="Phone Number" type="tel" value={personalInfo.phone} readOnly />
            <Field label="Alternate Number" type="tel" value={personalInfo.alternatePhone} readOnly />
            <Field label="Father's Name" type="text" value={personalInfo.fathersName} onChange={(e) => setPersonalInfo({ ...personalInfo, fathersName: e.target.value })} />
            <Field label="Date of Birth" type="date" value={personalInfo.dateOfBirth} onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })} />
            <Field label="Gender" type="select" options={['Male', 'Female', 'Other']} value={personalInfo.gender} onChange={(e) => setPersonalInfo({ ...personalInfo, gender: e.target.value })} />
          </>
        );
      case 3:
        return (
          <>
            <div className="title">Address Information</div>
            <Field label="Street Address" type="text" value={addressInfo.streetAddress} readOnly />
            <Field label="Landmark" type="text" value={addressInfo.landmark} readOnly />
            <Field label="City" type="text" value={addressInfo.city} readOnly />
            <Field label="District" type="text" value={addressInfo.district} readOnly />
            <Field label="State" type="text" value={addressInfo.state} readOnly />
            <Field label="Postal Code" type="text" value={addressInfo.postalCode} readOnly />
            <Field label="Country" type="text" value={addressInfo.country} readOnly />
            <Field label="Location" type="select" options={['Location 1', 'Location 2']} value={addressInfo.location} onChange={(e) => setAddressInfo({ ...addressInfo, location: e.target.value })} />
            <Field label="Zone" type="select" options={['Zone 1', 'Zone 2']} value={addressInfo.zone} onChange={(e) => setAddressInfo({ ...addressInfo, zone: e.target.value })} />
            <Field label="Settlement" type="select" options={['Settlement 1', 'Settlement 2']} value={addressInfo.settlement} onChange={(e) => setAddressInfo({ ...addressInfo, settlement: e.target.value })} />
          </>
        );
      case 4:
        return (
          <>
            <div className="title">Demographic Information</div>
            <Field label="Level of Education" type="select" options={['High School', 'Bachelor', 'Master']} value={demographicInfo.levelOfEducation} onChange={(e) => setDemographicInfo({ ...demographicInfo, levelOfEducation: e.target.value })} />
            <Field label="Marital Status" type="select" options={['Single', 'Married', 'Divorced']} value={demographicInfo.maritalStatus} onChange={(e) => setDemographicInfo({ ...demographicInfo, maritalStatus: e.target.value })} />
            <Field label="Spouse Name" type="text" value={demographicInfo.spouseName} onChange={(e) => setDemographicInfo({ ...demographicInfo, spouseName: e.target.value })} />
            <Field label="Occupation" type="text" value={demographicInfo.occupation} onChange={(e) => setDemographicInfo({ ...demographicInfo, occupation: e.target.value })} />
            <Field label="Workplace Name" type="text" value={demographicInfo.workplaceName} onChange={(e) => setDemographicInfo({ ...demographicInfo, workplaceName: e.target.value })} />
            <Field label="Emergency Contact Person Name" type="text" value={demographicInfo.emergencyContactPersonName} onChange={(e) => setDemographicInfo({ ...demographicInfo, emergencyContactPersonName: e.target.value })} />
            <Field label="Relationship" type="select" options={['Parent', 'Sibling', 'Friend']} value={demographicInfo.relationship} onChange={(e) => setDemographicInfo({ ...demographicInfo, relationship: e.target.value })} />
            <Field label="Contact Phone Number" type="tel" value={demographicInfo.contactPhoneNumber} onChange={(e) => setDemographicInfo({ ...demographicInfo, contactPhoneNumber: e.target.value })} />
          </>
        );
      case 5:
        return (
          <>
            <div className="title">Additional Information</div>
            <Field label="Age" type="text" value={additionalInfo.age} onChange={(e) => setAdditionalInfo({ ...additionalInfo, age: e.target.value })} />
            <Field label="Language(s) Spoken" type="select" options={['English', 'Spanish', 'French']} value={additionalInfo.languagesSpoken} onChange={(e) => setAdditionalInfo({ ...additionalInfo, languagesSpoken: e.target.value })} />
            <Field label="Income Range" type="select" options={['<20k', '20k-50k', '50k-100k']} value={additionalInfo.incomeRange} onChange={(e) => setAdditionalInfo({ ...additionalInfo, incomeRange: e.target.value })} />
            <Field label="Number of Dependents" type="select" options={['0', '1', '2+',]} value={additionalInfo.numberOfDependents} onChange={(e) => setAdditionalInfo({ ...additionalInfo, numberOfDependents: e.target.value })} />
            <Field label="Economic/Employment Sector" type="select" options={['Private', 'Public', 'Self-Employed']} value={additionalInfo.economicSector} onChange={(e) => setAdditionalInfo({ ...additionalInfo, economicSector: e.target.value })} />
            <Field label="Employment Status" type="select" options={['Employed', 'Unemployed', 'Student']} value={additionalInfo.employmentStatus} onChange={(e) => setAdditionalInfo({ ...additionalInfo, employmentStatus: e.target.value })} />
            <Field label="Years of Experience" type="text" value={additionalInfo.yearsOfExperience} onChange={(e) => setAdditionalInfo({ ...additionalInfo, yearsOfExperience: e.target.value })} />
            <Field label="Job Title/Role" type="text" value={additionalInfo.jobTitle} onChange={(e) => setAdditionalInfo({ ...additionalInfo, jobTitle: e.target.value })} />
          </>
        );
      case 6:
        return (
          <>
            <div className="title">Lifestyle</div>
            <Field label="Hobbies" type="checkbox" options={['Reading', 'Traveling', 'Sports']} value={lifestyleInfo.hobbies} onChange={(selected) => setLifestyleInfo({ ...lifestyleInfo, hobbies: selected })} />
            <Field label="Interests" type="checkbox" options={['Technology', 'Art', 'Music']} value={lifestyleInfo.interests} onChange={(selected) => setLifestyleInfo({ ...lifestyleInfo, interests: selected })} />
            <Field label="Favorite Platforms" type="checkbox" options={['Facebook', 'Twitter', 'Instagram']} value={lifestyleInfo.favoritePlatforms} onChange={(selected) => setLifestyleInfo({ ...lifestyleInfo, favoritePlatforms: selected })} />
            <Field label="Preferred Content Type" type="checkbox" options={['Articles', 'Videos', 'Podcasts']} value={lifestyleInfo.preferredContentType} onChange={(selected) => setLifestyleInfo({ ...lifestyleInfo, preferredContentType: selected })} />
            <Field label="Focus on Health" type="checkbox" options={['Yes', 'No']} value={lifestyleInfo.focusOnHealth} onChange={(selected) => setLifestyleInfo({ ...lifestyleInfo, focusOnHealth: selected })} />
            <Field label="Spending Style" type="checkbox" options={['Frugal', 'Moderate', 'Lavish']} value={lifestyleInfo.spendingStyle} onChange={(selected) => setLifestyleInfo({ ...lifestyleInfo, spendingStyle: selected })} />
          </>
        );
      case 7:
        return (
          <>
            <div className="title">Social Media</div>
            <Field label="LinkedIn Profile" type="url" value={socialMediaInfo.linkedIn} onChange={(e) => setSocialMediaInfo({ ...socialMediaInfo, linkedIn: e.target.value })} />
            <Field label="Facebook Profile" type="url" value={socialMediaInfo.facebook} onChange={(e) => setSocialMediaInfo({ ...socialMediaInfo, facebook: e.target.value })} />
            <Field label="Twitter Handle" type="url" value={socialMediaInfo.twitter} onChange={(e) => setSocialMediaInfo({ ...socialMediaInfo, twitter: e.target.value })} />
            <Field label="Instagram Handle" type="url" value={socialMediaInfo.instagram} onChange={(e) => setSocialMediaInfo({ ...socialMediaInfo, instagram: e.target.value })} />
            <Field label="Website/Blog" type="url" value={socialMediaInfo.website} onChange={(e) => setSocialMediaInfo({ ...socialMediaInfo, website: e.target.value })} />
          </>
        );
      case 8:
        return (
          <>
            <div className="title">Identity Information</div>
            <Field label="PAN Number" type="text" value={identityInfo.panNumber} onChange={(e) => setIdentityInfo({ ...identityInfo, panNumber: e.target.value })} />
            <Field label="Aadhar Card Number" type="text" value={identityInfo.aadharNumber} onChange={(e) => setIdentityInfo({ ...identityInfo, aadharNumber: e.target.value })} />
            <Field label="Passport Number (Optional)" type="text" value={identityInfo.passportNumber} onChange={(e) => setIdentityInfo({ ...identityInfo, passportNumber: e.target.value })} />
            <Field label="Voter ID Number (Optional)" type="text" value={identityInfo.voterIdNumber} onChange={(e) => setIdentityInfo({ ...identityInfo, voterIdNumber: e.target.value })} />
            <Field label="Driving License Number (Optional)" type="text" value={identityInfo.drivingLicenseNumber} onChange={(e) => setIdentityInfo({ ...identityInfo, drivingLicenseNumber: e.target.value })} />
          </>
        );
      case 9:
        return (
          <>
            <div className="title">Contact Preferences</div>
            <Field label="Preferred Contact Method" type="text" value={contactPreferences.preferredContactMethod} readOnly />
            <Field label="Preferred Contact Time" type="text" value={contactPreferences.preferredContactTime} readOnly />
          </>
        );
      case 10:
        return (
          <>
            <div className="title">Lead Sources</div>
            <Field label="Source Type" type="text" value={leadSources.sourceType} readOnly />
            <Field label="Sub Type" type="text" value={leadSources.subType} readOnly />
          </>
        );
      case 11:
        return (
          <>
            <div className="title">Sponsor Details (if Referral selected)</div>
            <Field label="Sponsor ID" type="text" value={sponsorDetails.sponsorId} readOnly />
            <Field label="Sponsor Name" type="text" value={sponsorDetails.sponsorName} readOnly />
            <Field label="Sponsor Contact Number" type="text" value={sponsorDetails.sponsorContactNumber} readOnly />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>Profile Update Form</header>
      {renderProgressBar()}
      <div className="form-outer">
        <form onSubmit={handleSubmit}>
          <div className="page">
            {renderStepContent()}
            <div className="field btns">
              {currentStep > 1 && (
                <button type="button" className="prev" onClick={handlePrev}>
                  Previous
                </button>
              )}
              {currentStep < totalSteps ? (
                <button type="button" className="next" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit" className="submit">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;