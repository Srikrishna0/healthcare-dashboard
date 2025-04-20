import React from "react";
import "../styles/VitalsCard.css";

const VitalsCard = ({ history }) => {
  const { heart_rate, respiratory_rate, temperature } = history;

  return (
    <div className="vitals-card">
      <h3>Vitals</h3>
      <p>Heart Rate: {heart_rate.value} bpm ({heart_rate.levels})</p>
      <p>Respiratory Rate: {respiratory_rate.value} breaths/min ({respiratory_rate.levels})</p>
      <p>Temperature: {temperature.value}°F ({temperature.levels})</p>
    </div>
  );
};

export default VitalsCard;
