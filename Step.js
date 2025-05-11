import React from 'react';

const Step = ({ stepNumber, currentStep }) => {
  const isActive = stepNumber <= currentStep;
  return (
    <div className="step">
      <p>{`Step ${stepNumber}`}</p>
      <div className={`bullet ${isActive ? 'active' : ''}`}>
        <span>{stepNumber}</span>
        <div className={`check fas fa-check ${isActive ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default Step;