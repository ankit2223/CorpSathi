import React, { useState } from 'react';
import Field from './Field';
import '../App.css'; // Ensure CSS is imported

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Total number of steps in the form

  const [showModal, setShowModal] = useState(false);

  // State for form fields
  const [leadType, setLeadType] = useState('');
  const [priority, setPriority] = useState('');
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
  const [serviceLocation, setServiceLocation] = useState({
    streetAddress: '',
    landmark: '',
    city: '',
    district: '',
    state: '',
    postalCode: '',
    country: '',
  });
  const [serviceInfo, setServiceInfo] = useState({
    serviceCategory: '',
    serviceSubCategory: '',
    serviceId: '',
    serviceName: '',
    description: '',
    quantityRequested: '',
    priceRate: '',
    unitOfMeasurement: '',
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    specialInstructions: '',
    preferredDate: '',
    preferredTime: '',
    agreeToTerms: false,
  });

  const [paymentDetails, setPaymentDetails] = useState({
    paymentMode: '',
    paymentDate: '',
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
      'Request Form',
      'Service Location',
      'Service  Information',
      'Delivery  Information',
      'Payment Details',
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
  serviceInfo.description = "Some Description";


  // Render the content for each step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="title">Request Form</div>
            <div className="field">
                  <div className="label">Consumer/Lead ID</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    readOnly
                    required
                  />
            </div>
            <div className="field">
                  <div className="label">Full Name</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    readOnly
                    required
                  />
            </div>
            <div className="field">
                  <div className="label">GSTIN/UIN</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    readOnly
                    required
                  />
            </div>
            <div className="field">
                  <div className="label">Authorizer/Father Name</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    readOnly
                    required
                  />
            </div>
            <div className="field">
                  <div className="label">Email Address</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    readOnly
                    required
                  />
            </div>
            <div className="field">
                  <div className="label">Phone Number</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    readOnly
                    required
                  />
            </div>
            <div className="field">
                  <div className="label">Alternate Number</div>
                  <input
                    type="text"
                    value={businessInfo.companyName}
                    onChange={(e) =>
                      setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                    }
                    readOnly
                    required
                  />
            </div>
            
          </>
        );
        case 2:
          return (
            <>
              <div className="title">Service Location</div>
              <div className="field">
                <div className="label">Street Address</div>
                <input
                  type="text"
                  value={serviceLocation.streetAddress}
                  onChange={(e) =>
                    setServiceLocation({ ...serviceLocation, streetAddress: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field">
                <div className="label">Landmark</div>
                <input
                  type="text"
                  value={serviceLocation.landmark}
                  onChange={(e) =>
                    setServiceLocation({ ...serviceLocation, landmark: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field">
                <div className="label">City</div>
                <input
                  type="text"
                  value={serviceLocation.city}
                  onChange={(e) =>
                    setServiceLocation({ ...serviceLocation, city: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field">
                <div className="label">District</div>
                <select
                  value={serviceLocation.district}
                  onChange={(e) =>
                    setServiceLocation({ ...serviceLocation, district: e.target.value })
                  }
                  required
                >
                  <option value="">Select District</option>
                  {/* Add district options here */}
                </select>
              </div>
              <div className="field">
                <div className="label">State</div>
                <input
                  type="text"
                  value={serviceLocation.state}
                  onChange={(e) =>
                    setServiceLocation({ ...serviceLocation, state: e.target.value })
                  }
                  required
                />
              </div>
              <div className="field">
                <div className="label">Postal Code</div>
                <select
                  value={serviceLocation.postalCode}
                  onChange={(e) =>
                    setServiceLocation({ ...serviceLocation, postalCode: e.target.value })
                  }
                  required
                >
                  <option value="">Select Postal Code</option>
                  {/* Add postal code options here */}
                </select>
              </div>
              <div className="field">
                <div className="label">Country</div>
                <select
                  value={serviceLocation.country}
                  onChange={(e) =>
                    setServiceLocation({ ...serviceLocation, country: e.target.value })
                  }
                  required
                >
                  <option value="">Select Country</option>
                  {/* Add country options here */}
                </select>
              </div>
            </>
          );
          case 3:
            return (
              <>
                <div className="title">Service Information</div>
                <div className="field">
                  <div className="label">Service Category</div>
                  <select
                    value={serviceInfo.serviceCategory}
                    onChange={(e) =>
                      setServiceInfo({ ...serviceInfo, serviceCategory: e.target.value })
                    }
                    required
                  >
                    <option value="">Select Service Category</option>
                    <option value="">option 2</option>
                  </select>
                </div>
                <div className="field">
                  <div className="label">Service Sub Category</div>
                  <select
                    value={serviceInfo.serviceSubCategory}
                    onChange={(e) =>
                      setServiceInfo({ ...serviceInfo, serviceSubCategory: e.target.value })
                    }
                    required
                  >
                    <option value="">Select Service Sub Category</option>
                  </select>
                </div>
                <div className="field">
                  <div className="label">Service ID/SKU</div>
                  <select
                    value={serviceInfo.serviceId}
                    onChange={(e) =>
                      setServiceInfo({ ...serviceInfo, serviceId: e.target.value })
                    }
                    required
                  >
                    <option value="">Select Service ID/SKU</option>
                  </select>
                </div>
                <div className="field">
                  <div className="label">Service Name</div>
                  <select
                    value={serviceInfo.serviceName}
                    onChange={(e) =>
                      setServiceInfo({ ...serviceInfo, serviceName: e.target.value })
                    }
                    required
                  >
                    <option value="">Select Service Name</option>
                  </select>
                </div>
                <div className="field">
                  <div className="label">Description</div>
                  <input type="text" value={serviceInfo.description} readOnly />
                  
                </div>
                <div className="field">
                  <div className="label">Quantity Requested</div>
                  <input
                    type="text"
                    value={serviceInfo.quantityRequested}
                    onChange={(e) =>
                      setServiceInfo({ ...serviceInfo, quantityRequested: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field">
                  <div className="label">Price/Rate</div>
                  <input type="text" value={serviceInfo.priceRate} readOnly />
                </div>
                <div className="field">
                  <div className="label">Unit of Measurement (UoM)</div>
                  <input type="text" value={serviceInfo.unitOfMeasurement} readOnly />
                </div>
          
                {/* Add Service Button */}
                <button className="btn-add-service" onClick={() => setShowModal(true)}>
                  Add Service
                </button>
                
          
                {/* Add Service Modal */}
                {showModal && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <h3>Add Service</h3>
                      <table>
                        <tbody>
                          <tr>
                            <td>Service Category</td>
                            <td>{serviceInfo.serviceCategory || "Dropdown"}</td>
                          </tr>
                          <tr>
                            <td>Service Sub Category</td>
                            <td>{serviceInfo.serviceSubCategory || "Dependent Dropdown"}</td>
                          </tr>
                          <tr>
                            <td>Service ID/SKU</td>
                            <td>{serviceInfo.serviceId || "Dependent Dropdown"}</td>
                          </tr>
                          <tr>
                            <td>Service Name</td>
                            <td>{serviceInfo.serviceName || "Dependent Dropdown"}</td>
                          </tr>
                          <tr>
                            <td>Description</td>
                            <td>{serviceInfo.description || "Auto-filled"}</td>
                          </tr>
                          <tr>
                            <td>Quantity Requested</td>
                            <td>{serviceInfo.quantityRequested || "Text Field"}</td>
                          </tr>
                          <tr>
                            <td>Price/Rate</td>
                            <td>{serviceInfo.priceRate || "Auto-filled"}</td>
                          </tr>
                          <tr>
                            <td>Unit of Measurement (UoM)</td>
                            <td>{serviceInfo.unitOfMeasurement || "Auto-filled"}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="modal-buttons">
                        <button className="btn-cancel" onClick={() => setShowModal(false)}>
                          Cancel
                        </button>
                        <button className="btn-add" onClick={() => setShowModal(false)}>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
            case 4:
              return (
                <>
                  <div className="title">Delivery Information</div>
                  <div className="field">
                    <div className="label">Special Instructions</div>
                    <input
                      type="text"
                      value={deliveryInfo.specialInstructions}
                      onChange={(e) =>
                        setDeliveryInfo({ ...deliveryInfo, specialInstructions: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <div className="label">Preferred Date</div>
                    <input
                      type="date"
                      value={deliveryInfo.preferredDate}
                      onChange={(e) =>
                        setDeliveryInfo({ ...deliveryInfo, preferredDate: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="field">
                    <div className="label">Preferred Time</div>
                    <input
                      type="time"
                      value={deliveryInfo.preferredTime}
                      onChange={(e) =>
                        setDeliveryInfo({ ...deliveryInfo, preferredTime: e.target.value })
                      }
                      required
                    />
                  </div>
                </>
              );
            
              case 5:
  return (
    <>
      <div className="title">Payment Details</div>
      <div className="field">
        <div className="label">Payment Mode</div>
        <select
          value={paymentDetails.paymentMode}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, paymentMode: e.target.value })
          }
          required
        >
          <option value="">Select Payment Mode</option>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="netBanking">Net Banking</option>
          <option value="upi">UPI</option>
          <option value="cash">Cash</option>
        </select>
      </div>
      <div className="field">
        <div className="label">Payment Date</div>
        <input
          type="date"
          value={paymentDetails.paymentDate}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, paymentDate: e.target.value })
          }
          required
        />
      </div>

      {/* Confirmation Section */}
      <div className="field">
        <label>
          <input
            type="checkbox"
            checked={paymentDetails.agreeToTerms}
            onChange={(e) =>
              setPaymentDetails({ ...paymentDetails, agreeToTerms: e.target.checked })
            }
            required
          />
          Agree to Terms and Conditions
        </label>
      </div>
    </>
  );

              
     
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>Request Form</header>
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

export default LeadForm;