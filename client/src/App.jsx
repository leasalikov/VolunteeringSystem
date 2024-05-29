
// import cors from 'cors';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import React, { createContext, useState } from "react";
import Volunteer from './components/Volunteer'

import Register from './components/Register';
export const UserContext = createContext();
function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="users/:userId">
              <Route path="home" element={<Home />}>
                <Route path="volunteer" element={<Volunteer />}>
                </Route>
              </Route>
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

