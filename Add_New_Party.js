import React, { useState } from 'react';
import Select from 'react-select';
import Field from './Field';
import '../App.css'; // Ensure CSS is imported

const AddNewParty = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Total number of steps in the form

  // State for form fields
  const [leadType, setLeadType] = useState('');
  const [priority, setPriority] = useState('');
  const orderOptions = [
    { value: 'ORD12345', label: 'ORD12345 - John Doe' },
    { value: 'ORD67890', label: 'ORD67890 - Jane Smith' },
    { value: 'ORD54321', label: 'ORD54321 - Michael Johnson' },
    { value: 'ORD98765', label: 'ORD98765 - Emily Davis' }
  ];
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    alternatePhone: '',
  });
  const [businessInfo, setBusinessInfo] = useState({
    companyName: '',
    authorizedPerson: '',
    email: '',
    phone: '',
    alternatePhone: '',
  });
  const [interestedIn, setInterestedIn] = useState({
    serviceCategory: '',
    serviceSubCategory: '',
    serviceName: '',
    scopeRequired: '',
    additionalSpecifications: '',
  });
  const [addressInfo, setAddressInfo] = useState({
    streetAddress: '',
    landmark: '',
    city: '',
    district: '',
    state: '',
    postalCode: '',
    country: '',
  });
  const [contactPreferences, setContactPreferences] = useState({
    preferredContactMethod: '',
    preferredContactTime: '',
  });
  const [leadSources, setLeadSources] = useState({
    sourceType: '',
    subType: '',
  });
  const [sponsorDetails, setSponsorDetails] = useState({
    sponsorId: '',
    sponsorName: '',
    sponsorContactNumber: '',
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
    console.log('Lead Form Submitted:', {
      leadType,
      priority,
      personalInfo,
      businessInfo,
      interestedIn,
      addressInfo,
      contactPreferences,
      leadSources,
      sponsorDetails,
    });
    alert('Lead Form Submitted Successfully!');
  };

  // Render the progress bar
  const renderProgressBar = () => {
    const steps = [
      'Lead Information',
      leadType === 'individual' ? 'Personal Information' : 'Business Information',
      'Interested In',
      'Address Information',
      'Contact Preferences',
      'Lead Sources',
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
            <div className="title">Party Information</div>
            <div className="field">
              <div className="label">Party Type</div>
              <select
                value={leadType}
                onChange={(e) => setLeadType(e.target.value)}
                required
              >
                <option value="">Select Party Type</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="field">
              <div className="label">User Type</div>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="title">
              {leadType === 'individual' ? 'Personal Information' : 'Business Information'}
            </div>
            {leadType === 'individual' ? (
  <>
    {/* Searchable Order ID Dropdown */}
    <div className="field">
      <div className="label">Order ID / Full Name</div>
      <Select
        options={orderOptions}
        value={orderOptions.find(option => option.value === personalInfo.orderId)}
        onChange={(selectedOption) =>
          setPersonalInfo({ ...personalInfo, orderId: selectedOption.value })
        }
        placeholder="Search or select Order ID"
        isSearchable
      />
    </div>

    {/* PAN Number - Auto-filled */}
    <div className="field">
      <div className="label">PAN Number</div>
      <input type="text" value={personalInfo.panNumber} readOnly />
    </div>

    {/* Father Name - Text Field */}
    <div className="field">
      <div className="label">Father Name</div>
      <input
        type="text"
        value={personalInfo.fatherName}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, fatherName: e.target.value })
        }
        required
      />
    </div>

    {/* Email Address - Email Input */}
    <div className="field">
      <div className="label">Email Address</div>
      <input
        type="email"
        value={personalInfo.email}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, email: e.target.value })
        }
        required
      />
    </div>

    {/* Phone Number - Phone Field */}
    <div className="field">
      <div className="label">Phone Number</div>
      <input
        type="tel"
        value={personalInfo.phone}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, phone: e.target.value })
        }
        required
      />
    </div>

    {/* Alternate Number - Phone Field */}
    <div className="field">
      <div className="label">Alternate Number</div>
      <input
        type="tel"
        value={personalInfo.alternatePhone}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, alternatePhone: e.target.value })
        }
      />
    </div>
  </>
)
: (
              <>
                <div className="field">
                  <div className="label">Company/Firm Name</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field">
                  <div className="label">Authorized Person’s Name</div>
                  <input
                    type="text"
                    value={businessInfo.authorizedPerson}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, authorizedPerson: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field">
                  <div className="label">Email Address</div>
                  <input
                    type="email"
                    value={businessInfo.email}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field">
                  <div className="label">Phone Number</div>
                  <input
                    type="tel"
                    value={businessInfo.phone}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field">
                  <div className="label">Alternate Number</div>
                  <input
                    type="tel"
                    value={businessInfo.alternatePhone}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, alternatePhone: e.target.value })
                    }
                  />
                </div>
              </>
            )}
          </>
        );
      case 3:
        return (
          <>
            <div className="title">Interested In</div>
            <div className="field">
              <div className="label">Service Category</div>
              <select
                value={interestedIn.serviceCategory}
                onChange={(e) =>
                  setInterestedIn({ ...interestedIn, serviceCategory: e.target.value })
                }
                required
              >
                <option value="">Select Service Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>
            <div className="field">
              <div className="label">Service Sub Category</div>
              <select
                value={interestedIn.serviceSubCategory}
                onChange={(e) =>
                  setInterestedIn({ ...interestedIn, serviceSubCategory: e.target.value })
                }
                required
              >
                <option value="">Select Service Sub Category</option>
                <option value="subCategory1">Sub Category 1</option>
                <option value="subCategory2">Sub Category 2</option>
              </select>
            </div>
            <div className="field">
              <div className="label">Service Name</div>
              <select
                value={interestedIn.serviceName}
                onChange={(e) =>
                  setInterestedIn({ ...interestedIn, serviceName: e.target.value })
                }
                required
              >
                <option value="">Select Service Name</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
              </select>
            </div>
            <div className="field">
              <div className="label">Scope Required</div>
              <input
                type="text"
                value={interestedIn.scopeRequired}
                onChange={(e) =>
                  setInterestedIn({ ...interestedIn, scopeRequired: e.target.value })
                }
                required
              />
            </div>
            <div className="field">
              <div className="label">Additional Specifications</div>
              <textarea
                value={interestedIn.additionalSpecifications}
                onChange={(e) =>
                  setInterestedIn({ ...interestedIn, additionalSpecifications: e.target.value })
                }
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="title">Address Information</div>
            <div className="field">
              <div className="label">Street Address</div>
              <input
                type="text"
                value={addressInfo.streetAddress}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, streetAddress: e.target.value })
                }
                required
              />
            </div>
            <div className="field">
              <div className="label">Landmark</div>
              <input
                type="text"
                value={addressInfo.landmark}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, landmark: e.target.value })
                }
              />
            </div>
            <div className="field">
              <div className="label">City</div>
              <input
                type="text"
                value={addressInfo.city}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, city: e.target.value })
                }
                required
              />
            </div>
            <div className="field">
              <div className="label">District</div>
              <input
                type="text"
                value={addressInfo.district}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, district: e.target.value })
                }
                required
              />
            </div>
            <div className="field">
              <div className="label">State</div>
              <select
                value={addressInfo.state}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, state: e.target.value })
                }
                required
              >
                <option value="">Select State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>
            </div>
            <div className="field">
              <div className="label">Postal Code</div>
              <input
                type="text"
                value={addressInfo.postalCode}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, postalCode: e.target.value })
                }
                required
              />
            </div>
            <div className="field">
              <div className="label">Country</div>
              <select
                value={addressInfo.country}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, country: e.target.value })
                }
                required
              >
                <option value="">Select Country</option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
              </select>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="title">Contact Preferences</div>
            <div className="field">
              <div className="label">Preferred Contact Method</div>
              <select
                value={contactPreferences.preferredContactMethod}
                onChange={(e) =>
                  setContactPreferences({ ...contactPreferences, preferredContactMethod: e.target.value })
                }
                required
              >
                <option value="">Select Preferred Contact Method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
            <div className="field">
              <div className="label">Preferred Contact Time</div>
              <select
                value={contactPreferences.preferredContactTime}
                onChange={(e) =>
                  setContactPreferences({ ...contactPreferences, preferredContactTime: e.target.value })
                }
                required
              >
                <option value="">Select Preferred Contact Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div className="title">Lead Sources</div>
            <div className="field">
              <div className="label">Source Type</div>
              <select
                value={leadSources.sourceType}
                onChange={(e) =>
                  setLeadSources({ ...leadSources, sourceType: e.target.value })
                }
                required
              >
                <option value="">Select Source Type</option>
                <option value="referral">Referral</option>
                <option value="website">Website</option>
              </select>
            </div>
            <div className="field">
              <div className="label">Sub Type</div>
              <select
                value={leadSources.subType}
                onChange={(e) =>
                  setLeadSources({ ...leadSources, subType: e.target.value })
                }
                required
              >
                <option value="">Select Sub Type</option>
                <option value="subType1">Sub Type 1</option>
                <option value="subType2">Sub Type 2</option>
              </select>
            </div>
            {leadSources.sourceType === 'referral' && (
              <>
                <div className="field">
                  <div className="label">Sponsor ID</div>
                  <input
                    type="text"
                    value={sponsorDetails.sponsorId}
                    onChange={(e) =>
                      setSponsorDetails({ ...sponsorDetails, sponsorId: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <div className="label">Sponsor Name</div>
                  <input
                    type="text"
                    value={sponsorDetails.sponsorName}
                    onChange={(e) =>
                      setSponsorDetails({ ...sponsorDetails, sponsorName: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <div className="label">Sponsor Contact Number</div>
                  <input
                    type="text"
                    value={sponsorDetails.sponsorContactNumber}
                    onChange={(e) =>
                      setSponsorDetails({ ...sponsorDetails, sponsorContactNumber: e.target.value })
                    }
                  />
                </div>
              </>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>Lead Form</header>
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

export default AddNewParty;