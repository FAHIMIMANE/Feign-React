// src/components/Clients.js
import React, { useEffect, useState } from 'react';
import { clientAPI, voitureAPI } from '../services/api';
import VoituresModal from './VoituresModal';

function Clients() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientVoitures, setClientVoitures] = useState([]);

  useEffect(() => {
    clientAPI.getAllClients()
      .then(data => {
        setClients(data);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  }, []);

  const handleClientClick = async (client) => {
    try {
      const voitures = await voitureAPI.getVoituresByClientId(client.id);
      setClientVoitures(voitures);
      setSelectedClient(client);
    } catch (error) {
      console.error('Error fetching client voitures:', error);
    }
  };

  return (
    <div>
      <h2>Liste des Clients</h2>
      <div className="clients-grid">
        {clients.map(client => (
          <div 
            key={client.id} 
            className="client-card"
            onClick={() => handleClientClick(client)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{client.nom}</h3>
            <p>Age: {client.age}</p>
          </div>
        ))}
      </div>

      {selectedClient && (
        <VoituresModal
          client={selectedClient}
          voitures={clientVoitures}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
}

export default Clients;