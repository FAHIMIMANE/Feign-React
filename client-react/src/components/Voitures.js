// src/components/Voitures.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Voitures() {
  const [voitures, setVoitures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8888/voitures')
      .then(response => {
        setVoitures(response.data);
      })
      .catch(error => {
        console.error('Error fetching voitures:', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Voitures</h2>
      <div className="voitures-grid">
        {voitures.map(voiture => (
          <div key={voiture.id} className="voiture-card">
            <h3>{voiture.marque} {voiture.model}</h3>
            <p>Matricule: {voiture.matricule}</p>
            {voiture.client && (
              <p>Propriétaire: {voiture.client.nom}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Voitures;