import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultPage.css'; // For background image and styling

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId, productName, storageTemp, origin, destination, transportMode } = location.state;

  // Define the output data based on the product name
  const outputs = {
    
      damageProbability: "85-90%",
      energyConsumption: "5-25%"

   
  };

  // Get the output data for the product
  const result = outputs[productName] || {};

  return (
    <div className="result-page">
      <div className="result-content">
       
        {/* Display only energy consumption and damage probability */}
        {outputs.damageProbability && <p><strong>Damage Probability:</strong> {outputs.damageProbability}</p>}
        {outputs.energyConsumption && <p><strong>Energy Consumption:</strong> {outputs.energyConsumption}</p>}
      </div>
      <button onClick={() => navigate('/')}>Back to Input</button>
    </div>
  );
};

export default ResultPage;
