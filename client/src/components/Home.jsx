import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';

function Home() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);
    const navigate = useNavigate();

    async function volunteering(event) {
        console.log("email ", currentUser.email)
        event.preventDefault();
        // setCurrentUser({ currentUser: currentUser, categoryArray: categoriesArray, type: "volunteer" });
        var trueCategoriesArray = [];
        Object.keys(categoriesArray).forEach(key => {
            if (categoriesArray[key] == true)
                trueCategoriesArray.push(key);
        })
        console.log("trueCategoriesArray " + Object.keys(trueCategoriesArray) + Object.values(trueCategoriesArray))
        console.log(trueCategoriesArray);
        const username = currentUser.username;
        const paramsToSend = {
            "usernamevolenteers": username,
            "namecategory": trueCategoriesArray
        }
        //fetch req
        const response = fetchPostReq("volunteer", paramsToSend);
        const data = await response;
        console.log("dataaaaaaaaaa", data)
        // if (data.resualt == "userName duplicate") {////
        //     alert('userName exist')
        // }
        // else {
            console.log(data)
            navigate(`/users/${currentUser.idUser}/volunteer`, { state: { data: data.result4 } })
        // }

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
    }

    async function getHelp(event) {
        event.preventDefault();
        // setCurrentUser({ currentUser: currentUser, categoryArray: categoriesArray, type: "needy" })
        var trueCategoriesArray = [];
        Object.keys(categoriesArray).forEach(key => {
            if (categoriesArray[key] == true)
                trueCategoriesArray.push(key);
        })
        const username = currentUser.username;//!!!
        console.log(currentUser);
        const paramsToSend = {
            "usernameneedies": username,
            "namecategory": trueCategoriesArray
        }
        //fetch post req
        const response = fetchPostReq("needy", paramsToSend);
        const data = await response;
        console.log("data", data);
        if (data.result == "userName duplicate") (alert('userName exist'))
        else {
            navigate(`/users/${currentUser.idUser}/needy`)
        }
    }
    function AboutUs(){
        navigate(`/users/${currentUser.idUser}/about`)
    }
    return (
        <>
        <button onClick={AboutUs}>About Us</button>
            {/* <div className="background-animation" > */}
                <h1>ברוכים הבאים למערכת ההתנדבות הארצית לנפגעי המלחמה</h1>
                <h2>הנכם מוזמנים לקחת חלק </h2>
                <h3>{currentUser.username}</h3>
                {<form onSubmit={volunteering}>
                    <label for="food">ארוחות חמות</label>
                    <input type="checkbox" id="food" name="food" value={categoriesArray.food} onChange={(e) => setCategoriesArray({ food: e.target.checked, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter })} /><br />
                    <label for="hosting">אירוח</label>
                    <input type="checkbox" id="hosting" name="hosting" value={categoriesArray.hosting} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: e.target.checked, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter })} /><br />
                    <label for="toys">משחקים לילדים</label>
                    <input type="checkbox" id="toys" name="toys" value={categoriesArray.toys} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: e.target.checked, babysitter: categoriesArray.babysitter })} /><br />
                    <label for="babysitter">ביביסיטר</label>
                    <input type="checkbox" id="babysitter" name="babysitter" value={categoriesArray.babysitter} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: e.target.checked })} /><br />
                    <button><submit button onClick={volunteering}>התנדבות</submit></button>
                    <button><submit button onClick={getHelp}>בקשת עזרה</submit></button>
                </form>}
            {/* </div> */}
        </>
    )
}
export default Home;