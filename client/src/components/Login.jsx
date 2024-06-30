
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
  // const [user, setUser] = useState({});

  // const navigate = useNavigate();

  const handleLogin = () => {
    (async () => {
      if (userName == '' || password == '') {
        alert("Enter name and password");
        return;
      }
      const paramsToSend = { "username": userName, "password": password }
      //req
      const response = await fetchPostReq("login", paramsToSend);
      // const jsonUser =  response;
      console.log(response)
      if (response == "wrong details")
        alert('please try again or register.');
      // else if (jsonUser.result == "blocked")
      //   alert("you tried too many times, you are blocked! try again later");
      else {
        setCurrentUser(response.user[0])
        localStorage.setItem("currentUser", JSON.stringify(response.user));
        setIsLoggedInUser(true);
      }
      setUserName('');
      setPassword('');
      // fetch(`http://localhost:8080/login`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ "username": userName, "password": password })
      // })
      //   .then(response => response.json())
      //   .then(jsonUser => {
      //     if (jsonUser == "wrong details")
      //       alert('please try again or register.');
      //     else if (jsonUser.result == "blocked")
      //       alert("you tried too many times, you are blocked! try again later");
      //     else {
      //       setCurrentUser(jsonUser.user[0])
      //       localStorage.setItem("currentUser", JSON.stringify(jsonUser.user));
      //       setIsLoggedInUser(true);
      //     }
      //     setUserName('');
      //     setPassword('');
      //   })
      //   .catch(error => console.error('Error:', error));
    })();
  };

  const goToRegister = () => {
    setToRegister(true);
  };

  return (
    <div className='divStyle'>
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