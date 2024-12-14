// src/components/VoituresModal.js
import React from 'react';
import './VoituresModal.css';

function VoituresModal({ client, voitures, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Voitures de {client.nom}</h3>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {voitures.length > 0 ? (
            <div className="voitures-grid">
              {voitures.map(voiture => (
                <div key={voiture.id} className="voiture-card">
                  <h4>{voiture.marque} {voiture.model}</h4>
                  <p>Matricule: {voiture.matricule}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Aucune voiture trouvée pour ce client.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VoituresModal;