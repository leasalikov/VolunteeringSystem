
// import cors from 'cors';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import React, { createContext, useState } from "react";
import Volunteer from './components/Volunteer';
import Register from './components/Register';
import Needy from './components/Needy';
import ToVolunteer from './components/ToVolunteer'
import ToNeedy from './components/ToNeedy';
import GoogleMap from './components/GoogleMap';
// import DesignPatterns fr

// import About from './components/About';
export const UserContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);
  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
          <Routes>-
            {currentUser && (<Route path="users/:userId">
              <Route path="home" element={<Home />} />
              <Route path="volunteer" element={<Volunteer />} />
              <Route path="tovolunteer" element={<ToVolunteer />} />
              <Route path="needy" element={<Needy />} />
              <Route path="toneedy" element={<ToNeedy />} />
              <Route path="googleMap" element={<GoogleMap />} />
            </Route>)
            }
            <Route path="/" >
              <Route index element={<Login />} />
              <Route path="*" element={<Login />} />
              
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App;