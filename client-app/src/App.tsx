import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => { 
    axios.get("http://localhost:5000/api/Reservations").then(response => {
      console.log(response.data)
      setReservations(response.data)
      
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {reservations.map((reservation: any) => {
            <li key={reservation.id} >{reservation.title}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
