import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
function Home() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState({ food: false, hosting: false, toys: false, babysitter: false });

    // const [food, setFood] = useState(false);

    function volunteering(event) {
        event.preventDefault();
        setCurrentUser({ currentUser: currentUser, categoryArray: categoriesArray, type: "volunteer" })
        console.log(currentUser);

        fetch('http://localhost:8080/volunteer', {
            method: 'POST',
            body: JSON.stringify(currentUser),
            headers: { "Content-type": "application/json; charset=UTF-8", },
        })
            .then(response => response.json())
            .then(response => {
                // if (response.resualt == "userName duplicate") alert('userName exist')
                // else {
                    // setCurrentUser({ "id": response.insertId, "name": name, "username": username, "email": email, "phone": phone });
                    navigate(`/users/${response.insertId}/volunteer`)
                // }
            })
            .catch(error => console.error('Error:', error));

    }
    function getHelp(event) {
        event.preventDefault();;
        setCurrentUser({ currentUser: currentUser, categoryArray: categoriesArray, type: "needy" })
        console.log(currentUser);
    }
    return (
        <>
            <h1>ברוכים הבאים למערכת ההתנדבות הארצית לנפגעי המלחמה!</h1>
            <h2>הנכם מוזמנים לקחת חלק </h2>
            <h3>{currentUser.username}</h3>
            {<form onSubmit={volunteering}>
                <label for="food">אוכל</label>
                <input type="checkbox" id="food" name="food" value={categoriesArray.food} onChange={(e) => setCategoriesArray({ food: e.target.checked, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter })} /><br />

                <label for="hosting">אירוח</label>
                <input type="checkbox" id="hosting" name="hosting" value={categoriesArray.hosting} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: e.target.checked, toys: e.target.checked, babysitter: categoriesArray.babysitter })} /><br />
                <label for="toys">משחקים</label>
                <input type="checkbox" id="toys" name="toys" value={categoriesArray.toys} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: e.target.checked, babysitter: categoriesArray.babysitter })} /><br />
                <label for="babysitter">ביביסיטר</label>
                <input type="checkbox" id="babysitter" name="babysitter" value={categoriesArray.babysitter} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: e.target.checked })} /><br />
                <button><submit button onClick={volunteering}>התנדבות</submit></button>
                <button><submit button onClick={getHelp}>בקשת עזרה</submit></button>

                {/* <button onClick={() => {volunteering(this)}}>להתנדבות</button> */}
                {/* <button onClick={() => getHelp}>לבקשת עזרה</button> */}

            </form>}
        </>
    )
}
export default Home;