
// import React, { useState } from 'react';
// import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
// // import '../styles/RegisterAndLogin.css';
// import { UserContext } from '../App';
// import { useContext } from "react";
// import { fetchPostReq } from '../fetchFile'
// const Login = () => {
//   const { currentUser, setCurrentUser } = useContext(UserContext);
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedInUser, setIsLoggedInUser] = useState(false);
//   const [toRegister, setToRegister] = useState(false);

//   // const navigate = useNavigate();

//   const handleLogin = () => {
//     (async () => {
//       setCurrentUser(null);
//       localStorage.removeItem('currentUser')
//       if (userName == '' || password == '') {
//         alert("Enter name and password");
//         return;
//       }
//       const paramsToSend = { "username": userName, "password": password }
//       //req
//       const response = await fetchPostReq("login", paramsToSend);
//       // const jsonUser =  response;
//       console.log("response",response)
//       if (response == "wrong details")
//         alert('please try again or register.');
//       // else if (jsonUser.result == "blocked")
//       //   alert("you tried too many times, you are blocked! try again later");
//       else {
//         setCurrentUser(response.user[0])
//         console.log("her")
//         localStorage.setItem("currentUser", JSON.stringify(response.user[0]));


//         setIsLoggedInUser(true);
//       }
//       setUserName('');
//       setPassword('');
//     })();
//   };

//   const goToRegister = () => {
//     setToRegister(true);
//   };

//   return (
//     <div className='divLogin'>
//       <Navigate to={isLoggedInUser ? `/users/${currentUser.idUser}/home` : toRegister ? "/register" : "/login"} />
//       <div className='signUpLogin-container'>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="User Name"
//           value={userName}
//           required
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {/* <br/> */}
//         <button className='loginBtn' onClick={handleLogin}>Login</button>
//         <button className='signUpBtn' onClick={() => goToRegister()}>Register</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../App';
import { fetchPostReq } from '../fetchFile';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const [toRegister, setToRegister] = useState(false);

  const handleLogin = () => {
    (async () => {
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
      if (userName === '' || password === '') {
        alert("Enter name and password");
        return;
      }
      const paramsToSend = { "username": userName, "password": password };
      const response = await fetchPostReq("login", paramsToSend);
      console.log("response", response);
      if (response === "wrong details") {
        alert('please try again or register.');
      } else {
        setCurrentUser(response.user[0]);
        localStorage.setItem("currentUser", JSON.stringify(response.user[0]));
        setIsLoggedInUser(true);
        console.log(currentUser)
        const responseEmail = PostEmail(response.user[0].idUser, response.user[0].name, response.user[0].username, response.user[0].email)
        const emailData = await responseEmail;
        console.log("emailData ", emailData);
      }
      setUserName('');
      setPassword('');
    })();
  };

  const goToRegister = () => {
    setToRegister(true);
  };

  return (
    <div className='p-d-flex p-jc-center p-ai-center' style={{ height: '100vh' }}>
      <Navigate to={isLoggedInUser ? `/users/${currentUser.idUser}/home` : toRegister ? "/register" : "/login"} />
      <Card title="התחברות" style={{ width: '25rem' }}>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="username">שם משתמש</label>
            <InputText
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="p-field">
            <label htmlFor="password">סיסמא</label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
            />
          </div>
          <Button label="התחברות" icon="pi pi-check" onClick={handleLogin} className="p-mt-2 custom-button" />
          <Button label="רישום" icon="pi pi-user-plus" onClick={goToRegister} className="p-button-secondary p-mt-2 custom-button" />
        </div>
      </Card>
    </div>
  );
};

export default Login;
