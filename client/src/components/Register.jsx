// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from "react";
// import { UserContext } from '../App';
// import { fetchPostReq } from '../fetchFile'
// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [verifyPassword, setVerifyPassword] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const { currentUser, setCurrentUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   function checkEmail(strEmail) {
//     return /^\w+@([\w\-]+\.)+\w{2,3}$/.test(strEmail);
//   }

//   async function handleRegister () {
//     // (async () => {
//       if (verifyPassword != password || verifyPassword == "") {
//         alert('Please validate your password.');
//         return;
//       }
//       const validate = "/^([A-Za-z0-9_\-\.])"
//       if (name == "" || username == "" || !checkEmail(email)) {
//         alert("the parameters you entered are not correct")
//         return;
//       }
//       const newUser = { "name": name, "userName": username, "email": email, "phone": phone, "password": password }
//       //req
//       const response =await fetchPostReq("user", newUser);
//       const jsonUser = await response;
//       // if (response.resualt == "userName duplicate") alert('userName exist')
//       //   else {
//           setCurrentUser({ "idUser": jsonUser.result.insertId, "name": name, "username": username, "email": email, "phone": phone });
//           localStorage.setItem("currentUser", JSON.stringify(currentUser));
//           console.log("respons",response)
//           let token=response.token
//           console.log("token",token)
//           document.cookie=`token=${token}`
//           navigate(`/users/${jsonUser.result.insertId}/home`, { state: { user: "user" } })
//         // }
//       // fetch('http://localhost:8080/user', {
//       //   method: 'POST',
//       //   body: JSON.stringify(newUser),
//       //   headers: { "Content-type": "application/json; charset=UTF-8", },
//       // })
//       //   .then(response => response.json())
//       //   .then(response => {
//       //     if (response.resualt == "userName duplicate") alert('userName exist')
//       //     else {
//       //       setCurrentUser({ "id": response.insertId, "name": name, "username": username, "email": email, "phone": phone });
//       //       navigate(`/users/${response.insertId}/home`, { state: { user: user } })
//       //     }
//       //   })
//       //   .catch(error => console.error('Error:', error));
//     // })();
//   };

//   return (
//     <div>
//       <div className='signUpLogin-container'>
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="name"
//           value={name}
//           required
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           required
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Verify Password"
//           value={verifyPassword}
//           required
//           onChange={(e) => setVerifyPassword(e.target.value)}
//         />
//         <button className='signUpBtn' onClick={handleRegister}>Register</button>
//         <button className='loginBtn' onClick={() => navigate('/login')}>login</button>
//       </div>

//     </div>
//   );
// };
// export default Register;
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { fetchPostReq } from '../fetchFile';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Icons

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  function checkEmail(strEmail) {
    return /^\w+@([\w\-]+\.)+\w{2,3}$/.test(strEmail);
  }

  async function handleRegister () {
    if (verifyPassword !== password || verifyPassword === "") {
      alert('Please validate your password.');
      return;
    }
    if (name === "" || username === "" || !checkEmail(email)) {
      alert("The parameters you entered are not correct");
      return;
    }
    const newUser = { "name": name, "userName": username, "email": email, "phone": phone, "password": password };
    const response = await fetchPostReq("user", newUser);
    const jsonUser = await response;
    setCurrentUser({ "idUser": jsonUser.result.insertId, "name": name, "username": username, "email": email, "phone": phone });
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log("response", response);
    let token = response.token;
    console.log("token", token);
    document.cookie = `token=${token}`;
    navigate(`/users/${jsonUser.result.insertId}/home`, { state: { user: "user" } });
  }

  return (
    <div className='p-d-flex p-jc-center p-ai-center' style={{ height: '100vh' }}>
      <Card title="רישום" style={{ width: '25rem' }}>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="name">שם</label>
            <InputText
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="p-field">
            <label htmlFor="username">שם משתמש</label>
            <InputText
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="p-field">
            <label htmlFor="email">מייל</label>
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-field">
            <label htmlFor="phone">טלפון</label>
            <InputText
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          <div className="p-field">
            <label htmlFor="verifyPassword">וודא סיסמא</label>
            <Password
              id="verifyPassword"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              feedback={false}
            />
          </div>
          <Button label="רישום" icon="pi pi-check" onClick={handleRegister} className="p-mt-2 custom-button" />
          <Button label="התחברות" icon="pi pi-sign-in" onClick={() => navigate('/login')} className="p-button-secondary p-mt-2 custom-button" />
        </div>
      </Card>
    </div>
  );
};

export default Register;
