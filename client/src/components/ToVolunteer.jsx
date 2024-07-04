import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
import Header from './Header';
import Buttom from './Buttom';

function ToVolunteer() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ אוכל: false }, { אירוח: false }, { משחקים: false }, { בייביסיטר: false }]);
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
            navigate(`/users/${currentUser.idUser}/volunteer`, { state: { data: data } });
            // }
        }
    }
    const foodImg = () => {

    }
    const hostImg = () => {

    }
    const toysImg = () => {

    }
    const babysitterImg = () => {

    }

    return (
        <>
            <Header />
            <div className="divStyle">
                {<form onSubmit={volunteering}>
                    <div className='type'>
                        <button onClick={foodImg} className='foodImg'></button>
                        <br />
                        <label for="אוכל">ארוחות חמות</label>
                        <input type="checkbox" id="food" name="food" value={categoriesArray.אוכל} onChange={(e) => setCategoriesArray({ אוכל: e.target.checked, אירוח: categoriesArray.אירוח, משחקים: categoriesArray.משחקים, בייביסיטר: categoriesArray.בייביסיטר })} /><br />

                        <button onClick={hostImg} className='hostImg'></button>
                        <br />
                        <label for="אירוח">אירוח</label>
                        <input type="checkbox" id="hosting" name="hosting" value={categoriesArray.אירוח} onChange={(e) => setCategoriesArray({ אוכל: categoriesArray.אוכל, אירוח: e.target.checked, משחקים: categoriesArray.משחקים, בייביסיטר: categoriesArray.בייביסיטר })} /><br />
                    </div>
                    <div className='type'>
                        <button onClick={toysImg} className='toysImg'></button>
                        <br />
                        <label for="משחקים">משחקים לילדים</label>
                        <input type="checkbox" id="toys" name="toys" value={categoriesArray.משחקים} onChange={(e) => setCategoriesArray({ אוכל: categoriesArray.אוכל, אירוח: categoriesArray.אירוח, משחקים: e.target.checked, בייביסיטר: categoriesArray.בייביסיטר })} /><br />

                        <button onClick={babysitterImg} className='babysitterImg'></button>
                        <br />
                        <label for="בייביסיטר">ביביסיטר</label>
                        <input type="checkbox" id="babysitter" name="babysitter" value={categoriesArray.בייביסיטר} onChange={(e) => setCategoriesArray({ אוכל: categoriesArray.אוכל, אירוח: categoriesArray.אירוח, משחקים: categoriesArray.משחקים, בייביסיטר: e.target.checked })} /><br />
                    </div>
                    <br/>
                    <button><submit button onClick={volunteering}>התנדבות</submit></button>
                </form>}
            </div>
            <Buttom />
        </>
    )
}
export default ToVolunteer;