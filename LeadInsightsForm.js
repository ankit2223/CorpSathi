import React, { useState } from 'react';
import Field from './Field'; // Import the Field component
import '../App.css'; // Ensure CSS is imported

const LeadInsightsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8; // Total number of steps in the form

  // State for form fields
  const [goals, setGoals] = useState({
    primaryGoals: '',
    reasonsForBuying: '',
    buyingMotivations: '',
    desiredOutcomes: '',
    expectedOutcomes: '',
    supportNeeded: '',
  });
  const [budget, setBudget] = useState({
    estimatedBudget: '',
    financialCapacity: '',
    budgetApprovalProcess: '',
    preferredPaymentMethods: '',
    paymentPreferences: '',
    expectedPurchaseDate: '',
  });
  const [decisionMaking, setDecisionMaking] = useState({
    timeframeForDecision: '',
    keyFactors: '',
    decisionChallenges: '',
    influencers: '',
    involvement: '',
  });
  const [challenges, setChallenges] = useState({
    keyChallenges: '',
    frustrations: '',
    unmetNeeds: '',
  });
  const [additionalNotes, setAdditionalNotes] = useState({
    noteTitle: '',
    noteDescription: '',
  });
  const [attachments, setAttachments] = useState({
    file1: null,
    file2: null,
    file3: null,
  });
  const [influences, setInfluences] = useState({
    influencingFactors: '',
    externalInfluences: '',
    emotionalInfluences: '',
    personalInfluences: '',
    situationalInfluences: '',
  });
  const [buyingBehavior, setBuyingBehavior] = useState({
    purchaseTriggers: '',
    shoppingFrequency: '',
    shoppingChannels: '',
    priceSensitivity: '',
    decisionMakingProcess: '',
    purchaseTiming: '',
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
    console.log('Lead Insights Form Submitted:', {
      goals,
      budget,
      decisionMaking,
      challenges,
      additionalNotes,
      attachments,
      influences,
      buyingBehavior,
    });
    alert('Lead Insights Form Submitted Successfully!');
  };

  // Render the progress bar
  const renderProgressBar = () => {
    const steps = [
      'Goals or Aspirations',
      'Budget',
      'Decision-Making',
      'Challenges Faced',
      'Additional Notes',
      'Attachments',
      'Influences on Buying',
      'Buying Behavior',
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
            <div className="title">Goals or Aspirations</div>
            <Field
              label="Primary Goals or Aspirations"
              type="text"
              value={goals.primaryGoals}
              onChange={(e) => setGoals({ ...goals, primaryGoals: e.target.value })}
              required
            />
            <Field
              label="Reasons for Buying"
              type="text"
              value={goals.reasonsForBuying}
              onChange={(e) => setGoals({ ...goals, reasonsForBuying: e.target.value })}
              required
            />
            <Field
              label="Buying Motivations"
              type="text"
              value={goals.buyingMotivations}
              onChange={(e) => setGoals({ ...goals, buyingMotivations: e.target.value })}
              required
            />
            <Field
              label="Desired Outcomes from Purchases"
              type="text"
              value={goals.desiredOutcomes}
              onChange={(e) => setGoals({ ...goals, desiredOutcomes: e.target.value })}
              required
            />
            <Field
              label="Expected Outcomes"
              type="text"
              value={goals.expectedOutcomes}
              onChange={(e) => setGoals({ ...goals, expectedOutcomes: e.target.value })}
              required
            />
            <Field
              label="Support or Solutions Needed to Achieve Goals"
              type="text"
              value={goals.supportNeeded}
              onChange={(e) => setGoals({ ...goals, supportNeeded: e.target.value })}
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <div className="title">Budget</div>
            <Field
              label="Estimated Budget for Purchases"
              type="text"
              value={budget.estimatedBudget}
              onChange={(e) => setBudget({ ...budget, estimatedBudget: e.target.value })}
              required
            />
            <Field
              label="Financial Capacity"
              type="select"
              options={['Low', 'Medium', 'High']}
              value={budget.financialCapacity}
              onChange={(e) => setBudget({ ...budget, financialCapacity: e.target.value })}
              required
            />
            <Field
              label="Budget Approval Process"
              type="select"
              options={['Simple', 'Complex']}
              value={budget.budgetApprovalProcess}
              onChange={(e) => setBudget({ ...budget, budgetApprovalProcess: e.target.value })}
              required
            />
            <Field
              label="Preferred Payment Methods"
              type="select"
              options={['Credit Card', 'Bank Transfer']}
              value={budget.preferredPaymentMethods}
              onChange={(e) => setBudget({ ...budget, preferredPaymentMethods: e.target.value })}
              required
            />
            <Field
              label="Payment Preferences for Purchases"
              type="select"
              options={['Full Payment', 'Installments']}
              value={budget.paymentPreferences}
              onChange={(e) => setBudget({ ...budget, paymentPreferences: e.target.value })}
              required
            />
            <Field
              label="Expected Purchase Date"
              type="date"
              value={budget.expectedPurchaseDate}
              onChange={(e) => setBudget({ ...budget, expectedPurchaseDate: e.target.value })}
              required
            />
          </>
        );
      case 3:
        return (
          <>
            <div className="title">Decision-Making</div>
            <Field
              label="Timeframe for Decision"
              type="select"
              options={['Immediate', 'Short Term', 'Long Term']}
              value={decisionMaking.timeframeForDecision}
              onChange={(e) => setDecisionMaking({ ...decisionMaking, timeframeForDecision: e.target.value })}
              required
            />
            <Field
              label="Key Factors for Choosing a Product or Service"
              type="select"
              options={['Price', 'Quality', 'Brand']}
              value={decisionMaking.keyFactors}
              onChange={(e) => setDecisionMaking({ ...decisionMaking, keyFactors: e.target.value })}
              required
            />
            <Field
              label="Decision-Making Challenges"
              type="select"
              options={['Time Constraints', 'Information Overload']}
              value={decisionMaking.decisionChallenges}
              onChange={(e) => setDecisionMaking({ ...decisionMaking, decisionChallenges: e.target.value })}
              required
            />
            <Field
              label="Influencers in the Decision-Making Process"
              type="select"
              options={['Peers', 'Experts']}
              value={decisionMaking.influencers}
              onChange={(e) => setDecisionMaking({ ...decisionMaking, influencers: e.target.value })}
              required
            />
            <Field
              label="Involvement in the Decision"
              type="select"
              options={['High', 'Medium', 'Low']}
              value={decisionMaking.involvement}
              onChange={(e) => setDecisionMaking({ ...decisionMaking, involvement: e.target.value })}
              required
            />
          </>
        );
      case 4:
        return (
          <>
            <div className="title">Challenges Faced</div>
            <Field
              label="Key Challenges or Problems"
              type="select"
              options={['Budget Constraints', 'Resource Limitations']}
              value={challenges.keyChallenges}
              onChange={(e) => setChallenges({ ...challenges, keyChallenges: e.target.value })}
              required
            />
            <Field
              label="Frustrations Related to Your Product/Industry"
              type="select"
              options={['Lack of Support', 'Poor Quality']}
              value={challenges.frustrations}
              onChange={(e) => setChallenges({ ...challenges, frustrations: e.target.value })}
              required
            />
            <Field
              label="Unmet Needs or Expectations"
              type="select"
              options={['Service Availability', 'Product Features']}
              value={challenges.unmetNeeds}
              onChange={(e) => setChallenges({ ...challenges, unmetNeeds: e.target.value })}
              required
            />
          </>
        );
      case 5:
        return (
          <>
            <div className="title">Additional Notes</div>
            <Field
              label="Note Title"
              type="text"
              value={additionalNotes.noteTitle}
              onChange={(e) => setAdditionalNotes({ ...additionalNotes, noteTitle: e.target.value })}
              required
            />
            <Field
              label="Note Description"
              type="textarea"
              value={additionalNotes.noteDescription}
              onChange={(e) => setAdditionalNotes({ ...additionalNotes, noteDescription: e.target.value })}
              required
            />
          </>
        );
      case 6:
        return (
          <>
            <div className="title">Attachments</div>
            <Field
              label="Document/File 1"
              type="file"
              onChange={(e) => setAttachments({ ...attachments, file1: e.target.files[0] })}
            />
            <Field
              label="Document/File 2"
              type="file"
              onChange={(e) => setAttachments({ ...attachments, file2: e.target.files[0] })}
            />
            <Field
              label="Document/File 3"
              type="file"
              onChange={(e) => setAttachments({ ...attachments, file3: e.target.files[0] })}
            />
          </>
        );
      case 7:
        return (
          <>
            <div className="title">Influences on Buying</div>
            <Field
              label="Influencing Factors"
              type="select"
              options={['Price', 'Quality']}
              value={influences.influencingFactors}
              onChange={(e) => setInfluences({ ...influences, influencingFactors: e.target.value })}
              required
            />
            <Field
              label="External Influences"
              type="select"
              options={['Market Trends', 'Competitor Actions']}
              value={influences.externalInfluences}
              onChange={(e) => setInfluences({ ...influences, externalInfluences: e.target.value })}
              required
            />
            <Field
              label="Emotional Influences"
              type="select"
              options={['Brand Loyalty', 'Personal Values']}
              value={influences.emotionalInfluences}
              onChange={(e) => setInfluences({ ...influences, emotionalInfluences: e.target.value })}
              required
            />
            <Field
              label="Personal Influences"
              type="select"
              options={['Family Opinions', 'Peer Recommendations']}
              value={influences.personalInfluences}
              onChange={(e) => setInfluences({ ...influences, personalInfluences: e.target.value })}
              required
            />
            <Field
              label="Situational Influences"
              type="select"
              options={['Time Constraints', 'Availability']}
              value={influences.situationalInfluences}
              onChange={(e) => setInfluences({ ...influences, situationalInfluences: e.target.value })}
              required
            />
          </>
        );
      case 8:
        return (
          <>
            <div className="title">Buying Behavior</div>
            <Field
              label="Purchase Triggers"
              type="select"
              options={['Promotions', 'Needs']}
              value={buyingBehavior.purchaseTriggers}
              onChange={(e) => setBuyingBehavior({ ...buyingBehavior, purchaseTriggers: e.target.value })}
              required
            />
            <Field
              label="Shopping Frequency"
              type="select"
              options={['Daily', 'Weekly', 'Monthly']}
              value={buyingBehavior.shoppingFrequency}
              onChange={(e) => setBuyingBehavior({ ...buyingBehavior, shoppingFrequency: e.target.value })}
              required
            />
            <Field
              label="Shopping Channels"
              type="select"
              options={['Online', 'In-Store']}
              value={buyingBehavior.shoppingChannels}
              onChange={(e) => setBuyingBehavior({ ...buyingBehavior, shoppingChannels: e.target.value })}
              required
            />
            <Field
              label="Price Sensitivity"
              type="select"
              options={['High', 'Medium', 'Low']}
              value={buyingBehavior.priceSensitivity}
              onChange={(e) => setBuyingBehavior({ ...buyingBehavior, priceSensitivity: e.target.value })}
              required
            />
            <Field
              label="Decision-Making Process"
              type="select"
              options={['Individual', 'Group']}
              value={buyingBehavior.decisionMakingProcess}
              onChange={(e) => setBuyingBehavior({ ...buyingBehavior, decisionMakingProcess: e.target.value })}
              required
            />
            <Field
              label="Purchase Timing"
              type="select"
              options={['Immediate', 'Future']}
              value={buyingBehavior.purchaseTiming}
              onChange={(e) => setBuyingBehavior({ ...buyingBehavior, purchaseTiming: e.target.value })}
              required
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>Lead Insights Form</header>
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

export default LeadInsightsForm;