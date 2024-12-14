// src/App.js
import React from 'react';
import './App.css';
import Clients from './components/Clients';
import Voitures from './components/Voitures';
import AddClient from './components/AddClient';
import AddVoiture from './components/AddVoiture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion des Voitures</h1>
      </header>
      <main>
        <div className="forms-container">
          <AddClient onClientAdded={() => window.location.reload()} />
          <AddVoiture onVoitureAdded={() => window.location.reload()} />
        </div>
        <Clients />
        <Voitures />
      </main>
    </div>
  );
}

export default App;