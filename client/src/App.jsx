
// import cors from 'cors';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import React, { createContext, useState } from "react";
import Volunteer from './components/Volunteer'
import About from './components/About';
import Register from './components/Register';
import Needy from './components/Needy';
// import About from './components/About';
export const UserContext = createContext();
function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="users/:userId">
              <Route path="home" element={<Home />} />
              <Route path="volunteer" element={<Volunteer />} />
              <Route path="needy" element={<Needy />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App

