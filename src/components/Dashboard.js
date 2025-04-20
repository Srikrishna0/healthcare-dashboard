import React from "react";
import patientData from "../data/patientData";
import VitalsCard from "./VitalsCard";
import BloodPressureChart from "./BloodPressureChart";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const patient = patientData[0];

  return (
    <div className="dashboard">
      <div className="header">
        <img src={patient.profile_picture} alt="Patient" />
        <h2>{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>DOB: {patient.date_of_birth}</p>
        <p>Phone: {patient.phone_number}</p>
        <p>Emergency: {patient.emergency_contact}</p>
        <p>Insurance: {patient.insurance_type}</p>
      </div>

      <div className="vitals-section">
        <VitalsCard history={patient.diagnosis_history[0]} />
        <BloodPressureChart data={patient.diagnosis_history} />
      </div>
    </div>
  );
};

export default Dashboard;
