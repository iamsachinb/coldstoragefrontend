import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InputForm.css'; // For background image and styling

const InputForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    storageTemp: '',
    origin: '',
    destination: '',
    transportMode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result', { state: { ...formData } });
  };

  return (
    <div className="input-form">
      <header className="form-header">
        <h1 className="form-heading">ISHRAE</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productId" placeholder="Product ID" value={formData.productId} onChange={handleChange} required />
        <input type="text" name="productName" placeholder="Product Name" value={formData.productName} onChange={handleChange} required />
        <input type="number" name="storageTemp" placeholder="Storage Temperature (°C)" value={formData.storageTemp} onChange={handleChange} required />
        <input type="text" name="origin" placeholder="Origin Location" value={formData.origin} onChange={handleChange} required />
        <input type="text" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} required />
        <input type="text" name="transportMode" placeholder="Mode of Transport" value={formData.transportMode} onChange={handleChange} required />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
