import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
import Header from './Header';

function ToVolunteer() {
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
        const username = currentUser.username;
        const paramsToSend = {
            "usernamevolenteers": username,
            "namecategory": trueCategoriesArray
        }
        //post req 
        //add the user to volunteer and to categoryVolunteer
        if (trueCategoriesArray.length == 0) (alert("לא בוצעה בחירה"));
        else {
            const response = fetchPostReq("volunteer", paramsToSend);
            const data = await response;
            // if (data.resualt == "userName duplicate") {////
            //     alert('userName exist')
            // }
            // else {
            console.log("data in ToVolunteer", data)
            navigate(`/users/${currentUser.idUser}/volunteer`, { state: { data: data } })
            // }
        }
    }

    return (
        <>
            <Header />
            <div className="divStyle">
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
                    {/* <button><submit button onClick={getHelp}>בקשת עזרה</submit></button> */}
                </form>}
            </div>
        </>
    )
}
export default ToVolunteer;