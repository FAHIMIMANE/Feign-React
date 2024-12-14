// src/services/api.js
import axios from 'axios';

const ClientAPI = axios.create({
  baseURL: 'http://localhost:8888/SERVICE-CLIENT',
  headers: {
    'Content-Type': 'application/json'
  }
});

const VoitureAPI = axios.create({
  baseURL: 'http://localhost:8888/SERVICE-VOITURE',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const clientAPI = {
  getAllClients: async () => {
    const response = await ClientAPI.get('/clients');
    return response.data;
  },

  getClientById: async (id) => {
    const response = await ClientAPI.get(`/client/${id}`);
    return response.data;
  },

  createClient: async (client) => {
    const response = await ClientAPI.post('/client', client);
    return response.data;
  }
};

export const voitureAPI = {
  getAllVoitures: async () => {
    const response = await VoitureAPI.get('/voitures');
    return response.data;
  },

  getVoitureById: async (id) => {
    const response = await VoitureAPI.get(`/voitures/${id}`);
    return response.data;
  },

  getVoituresByClientId: async (clientId) => {
    const response = await VoitureAPI.get(`/voitures/client/${clientId}`);
    return response.data;
  },

  createVoiture: async (clientId, voiture) => {
    const response = await VoitureAPI.post(`/voitures/${clientId}`, voiture);
    return response.data;
  }
};