import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { fetchPostReq } from '../fetchFile';
import Header from './Header';

function Home() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);
    const navigate = useNavigate();

    // async function volunteering(event) {
    //     event.preventDefault();
    //     // setCurrentUser({ currentUser: currentUser, categoryArray: categoriesArray, type: "volunteer" });
    //     var trueCategoriesArray = [];
    //     Object.keys(categoriesArray).forEach(key => {
    //         if (categoriesArray[key] == true)
    //             trueCategoriesArray.push(key);
    //     })
    //     const username = currentUser.username;
    //     const paramsToSend = {
    //         "usernamevolenteers": username,
    //         "namecategory": trueCategoriesArray
    //     }
    //     //fetch req
    //     if (trueCategoriesArray.length == 0) (alert("לא בוצעה בחירה"));
    //     else {
    //         const response = fetchPostReq("volunteer", paramsToSend);
    //         const data = await response;
    //         // if (data.resualt == "userName duplicate") {////
    //         //     alert('userName exist')
    //         // }
    //         // else {
    //         console.log(data)
    //         navigate(`/users/${currentUser.idUser}/volunteer`, { state: { data: data.result4 } })
    //         // }
    //     }
    // //יותר נכון:

    // try {
    //     const response = await fetch('http://localhost:8080/volunteer', {
    //         method: 'POST',
    //         body: JSON.stringify(paramsToSend),
    //         //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
    //         headers: { "Content-type": "application/json; charset=UTF-8", },
    //     })
    //     const data = await response.json();
    //     if (data.resualt == "userName duplicate") {
    //         alert('userName exist')

    //     }
    //     else {
    //         navigate(`/users/${currentUser.idUser}/volunteer`)
    //     }
    // }
    // catch (err) {
    //     console.log(err)
    // }

    // fetch('http://localhost:8080/volunteer', {
    //     method: 'POST',
    //     body: JSON.stringify(paramsToSend),
    //     //      body: JSON.stringify({ "username": userName, "categoriesArray": categoriesArray })
    //     headers: { "Content-type": "application/json; charset=UTF-8", },
    // })
    //     .then(response => response.json())
    //     .then(response => {
    //         if (response.resualt == "userName duplicate") alert('userName exist')
    //         else {
    //             // setCurrentUser({ "id": response.insertId, "name": name, "username": username, "email": email, "phone": phone })
    //             navigate(`/users/${currentUser.idUser}/volunteer`)
    //             // navigate(`/users/${response.insertId}/home`, { state: { user: user } })
    //         }
    //     })
    //     .catch(error => console.error('Error:', error));
    // }

    // async function getHelp(event) {
    //     event.preventDefault();
    //     // setCurrentUser({ currentUser: currentUser, categoryArray: categoriesArray, type: "needy" })
    //     var trueCategoriesArray = [];
    //     Object.keys(categoriesArray).forEach(key => {
    //         if (categoriesArray[key] == true)
    //             trueCategoriesArray.push(key);
    //     })
    //     const username = currentUser.username;//!!!
    //     console.log(currentUser);
    //     const paramsToSend = {
    //         "usernameneedies": username,
    //         "namecategory": trueCategoriesArray
    //     }
    //     //fetch post req
    //     const response = fetchPostReq("needy", paramsToSend);
    //     const data = await response;
    //     console.log("data", data);
    //     if (data.result == "userName duplicate") (alert('userName exist'))
    //     else {
    //         navigate(`/users/${currentUser.idUser}/needy`)
    //     }
    // }

    return (
        <>
            <Header value={categoriesArray} />
            <div className="background-animation" >
                <img className="img1" />
                <img className="img3" />
                <h1>{currentUser.username}</h1>
                <h2>ברוכים הבאים למערכת ההתנדבות הארצית לנפגעי המלחמה</h2>
                <h2>הנכם מוזמנים לקחת חלק </h2>
            </div>
        </>
    )
}
export default Home;