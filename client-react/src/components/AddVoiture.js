// src/components/AddVoiture.js
import React, { useState } from 'react';
import { voitureAPI } from '../services/api';

function AddVoiture({ onVoitureAdded }) {
  const [marque, setMarque] = useState('');
  const [model, setModel] = useState('');
  const [matricule, setMatricule] = useState('');
  const [clientId, setClientId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await voitureAPI.createVoiture(parseInt(clientId), {
        marque,
        model,
        matricule
      });
      onVoitureAdded(response);
      setMarque('');
      setModel('');
      setMatricule('');
      setClientId('');
    } catch (error) {
      console.error('Error adding voiture:', error);
      alert('Error adding voiture');
    }
  };

  return (
    <div className="add-form">
      <h3>Add New Voiture</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Marque"
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Client ID"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Voiture</button>
      </form>
    </div>
  );
}

export default AddVoiture;