import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);

    const navigate = useNavigate();

    async function volunteering(event) {
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
        console.log("paramsToSend ", paramsToSend)


        const 
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

    function getHelp(event) {
        event.preventDefault();;
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
        fetch('http://localhost:8080/needy', {
            method: 'POST',
            body: JSON.stringify(paramsToSend),
            headers: { "Content-type": "application/json; charset=UTF-8", },

        })
            .then(response => response.json())
            .then(response => {
                if (response.resualt == "userName duplicate") alert('userName exist')
                else {
                    // setCurrentUser({ "id": response.insertId, "name": name, "username": username, "email": email, "phone": phone })
                    navigate(`/users/${currentUser.idUser}/needy`)
                }
            })
            .catch(error => console.error('Error:', error));
    }
    return (
        <>
            <h1>ברוכים הבאים למערכת ההתנדבות הארצית לנפגעי המלחמה</h1>
            <h2>הנכם מוזמנים לקחת חלק </h2>
            <h3>{currentUser.username}</h3>
            {<form onSubmit={volunteering}>
                <label for="food">אוכל</label>
                <input type="checkbox" id="food" name="food" value={categoriesArray.food} onChange={(e) => setCategoriesArray({ food: e.target.checked, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter })} /><br />
                <label for="hosting">אירוח</label>
                <input type="checkbox" id="hosting" name="hosting" value={categoriesArray.hosting} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: e.target.checked, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter })} /><br />
                <label for="toys">משחקים</label>
                <input type="checkbox" id="toys" name="toys" value={categoriesArray.toys} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: e.target.checked, babysitter: categoriesArray.babysitter })} /><br />
                <label for="babysitter">ביביסיטר</label>
                <input type="checkbox" id="babysitter" name="babysitter" value={categoriesArray.babysitter} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: e.target.checked })} /><br />
                <button><submit button onClick={volunteering}>התנדבות</submit></button>
                <button><submit button onClick={getHelp}>בקשת עזרה</submit></button>

            </form>}
        </>
    )
}
export default Home;