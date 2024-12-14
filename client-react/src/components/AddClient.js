import React, { useState } from 'react';
import { clientAPI } from '../services/api';

function AddClient({ onClientAdded }) {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await clientAPI.createClient({
        nom: nom,
        age: parseFloat(age)
      });
      onClientAdded(response);
      setNom('');
      setAge('');
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Error adding client');
    }
  };

  return (
    <div className="add-form">
      <h3>Add New Client</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}

export default AddClient;