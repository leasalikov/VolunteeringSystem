
import React, { useState } from 'react';
import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
// import '../styles/RegisterAndLogin.css';
import { UserContext } from '../App';
import { useContext } from "react";
import { fetchPostReq } from '../fetchFile'
const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const [toRegister, setToRegister] = useState(false);

  // const navigate = useNavigate();

  const handleLogin = () => {
    (async () => {
      setCurrentUser(null);
      localStorage.removeItem('currentUser')
      if (userName == '' || password == '') {
        alert("Enter name and password");
        return;
      }
      const paramsToSend = { "username": userName, "password": password }
      //req
      const response = await fetchPostReq("login", paramsToSend);
      // const jsonUser =  response;
      console.log("response",response)
      if (response == "wrong details")
        alert('please try again or register.');
      // else if (jsonUser.result == "blocked")
      //   alert("you tried too many times, you are blocked! try again later");
      else {
        setCurrentUser(response.user[0])
        console.log("her")
        localStorage.setItem("currentUser", JSON.stringify(response.user[0]));
        
        
        setIsLoggedInUser(true);
      }
      setUserName('');
      setPassword('');
    })();
  };

  const goToRegister = () => {
    setToRegister(true);
  };

  return (
    <div className='divLogin'>
      <Navigate to={isLoggedInUser ? `/users/${currentUser.idUser}/home` : toRegister ? "/register" : "/login"} />
      <div className='signUpLogin-container'>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <br/> */}
        <button className='loginBtn' onClick={handleLogin}>Login</button>
        <button className='signUpBtn' onClick={() => goToRegister()}>Register</button>
      </div>
    </div>
  );
};

export default Login;