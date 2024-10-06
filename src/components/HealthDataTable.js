import React from 'react';
import './Dashboard.css'; // Assuming you create a CSS file for styles

function HealthDataTable({ data }) {
  return (
    <div className="table-container">
      <table className="health-data-table">
        <thead>
          <tr>
            <th>Heart Rate (bpm)</th>
            <th>SpO2 (%)</th>
            <th>Humidity (%)</th>
            <th>Temperature (°F)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.heartRate}</td>
              <td>{entry.spO2}</td>
              <td>{entry.humidity}</td>
              <td>{entry.temperature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HealthDataTable;