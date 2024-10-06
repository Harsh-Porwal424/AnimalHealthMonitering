import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported for navigation

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch top 100 feeds from the ThingSpeak channel
    fetch('https://api.thingspeak.com/channels/2684344/feeds.json?results=100')
      .then((response) => response.json())
      .then((jsonData) => {
        const feeds = jsonData.feeds.map((feed) => ({
          time: feed.created_at, // Get the time of the reading
          heartRate: parseFloat(feed.field1),
          respiratoryRate: parseFloat(feed.field2),
          temperature: parseFloat(feed.field3),
        }));
        setData(feeds);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const renderAlert = (heartRate, respiratoryRate, temperature) => {
    let alertMessage = '';
    if (heartRate > 110) {
      alertMessage = '⚠️ High heart rate! Notification Sent!! SEND HELP, EMERGENCY!';
    } else if (heartRate < 65) {
      alertMessage = '⚠️ Low heart rate! Notification Sent!! SEND HELP, EMERGENCY!';
    } else if (respiratoryRate < 12) {
      alertMessage = '⚠️ Low respiratory rate! Notification Sent!! SEND HELP, EMERGENCY!';
    } else if (respiratoryRate > 18) {
      alertMessage = '⚠️ High respiratory rate! Notification Sent!! SEND HELP, EMERGENCY!';
    } else if (temperature > 38) {
      alertMessage = '⚠️ High Temperature! Notification Sent!! SEND HELP, EMERGENCY!';
    } else if (temperature < 35) {
      alertMessage = '⚠️ Low Temperature! Notification Sent!! SEND HELP, EMERGENCY!';
    }

    return alertMessage ? (
      <span>{alertMessage}</span>
    ) : (
      <span>All vital signs are stable! ❤️❤️❤️</span>
    );
  };

  return (
    <div className="container mt-5 pt-5">
      <h1 style={{ fontWeight: 'bold' }}>Welcome to Your Animal Health Dashboard</h1>

      {/* New header for the button section */}
      <h2 style={{ fontWeight: 'bold' }}>Check Out Realtime Data Visualization & Insights on ThingSpeak</h2>
      
      {/* New button added here */}
      <a
  href="https://thingspeak.mathworks.com/channels/2684344"
  className="btn btn-go-there"
  target="_blank"
  rel="noopener noreferrer"
>
  Go There
</a>

      <p style={{ fontSize: '28px',fontWeight:'bold', paddingTop: '20px' }}>
  Here you can monitor your animal's health metrics and receive alerts.
</p>      <table className="table table-striped">
        <thead>
          <tr>
            <th>Time</th>
            <th>Heart Rate (bpm)</th>
            <th>Respiratory Rate (breaths/min)</th>
            <th>Temperature (°C)</th>
            <th>Alert</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{new Date(entry.time).toLocaleString()}</td> {/* Format time */}
              <td>{entry.heartRate}</td>
              <td>{entry.respiratoryRate}</td>
              <td>{entry.temperature}</td>
              <td>{renderAlert(entry.heartRate, entry.respiratoryRate, entry.temperature)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;