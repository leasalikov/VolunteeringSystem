import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
import { fetchPostReq } from '../fetchFile';
import Buttom from './Buttom';
import Logo from './Logo';
import Header from './Header';

const ToNeedy = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ אוכל: false }, { אירוח: false }, { משחקים: false }, { בייביסיטר: false }]);
    const navigate = useNavigate();
    // const [categoriesArray, setCategoriesArray] = useState({
    //      אוכל: false,
    //     אירוח: false,
    //     משחקים: false,
    //     בייביסיטר: false
    // });

    // const buttonsArray = [
    //     { id: 'אוכל', label: 'ארוחות חמות', key: ' אוכל', className: 'foodImg' },
    //     { id: 'אירוח', label: 'אירוח', key: 'אירוח', className: 'hostImg' },
    //     { id: 'משחקים', label: 'משחקים לילדים', key: 'משחקים', className: 'toysImg' },
    //     { id: 'babysitter', label: 'בייביסיטר', key: 'בייביסיטר', className: 'babysitterImg' }
    // ];

    // const handleCheckboxChange = (key, value) => {
    //     setCategoriesArray(prevState => ({
    //         ...prevState,
    //         [key]: value
    //     }));
    // };

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
        if (trueCategoriesArray.length == 0) {
            alert("לא בוצעה בחירה")
        }
        else {
            //fetch post req
            const response = fetchPostReq("needy", paramsToSend);
            const data = await response;
            console.log("data", data);
            if (data.result == "userName duplicate") (alert('userName exist'))
            else {
                navigate(`/users/${currentUser.idUser}/needy`)
            }
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
            <Logo />
            <Header />
            <div className="divStyle">
                {<form onSubmit={getHelp}>
                    <div className='type'>
                        <button onClick={foodImg} className='foodImg'></button>
                        <br />
                        <label for=" אוכל">ארוחות חמות</label>
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
                        <label for="בייביסיטר">בייביסיטר</label>
                        <input type="checkbox" id="babysitter" name="babysitter" value={categoriesArray.בייביסיטר} onChange={(e) => setCategoriesArray({ אוכל: categoriesArray.אוכל, אירוח: categoriesArray.אירוח, משחקים: categoriesArray.משחקים, בייביסיטר: e.target.checked })} /><br />
                    </div>
                    <br />
                    <button><submit button onClick={getHelp}>לבקשת עזרה</submit></button>
                </form>}
            </div>
            <Buttom />
        </>
    )
};
export default ToNeedy;


// <div className="divStyle">
// <form onSubmit={getHelp}>
//     {buttonsArray.map(item => (
//         <div className='type' key={item.key}>
//             <button onClick={() => handleCheckboxChange(item.key, !categoriesArray[item.key])} className={item.className}></button>
//             <br />
//             <label htmlFor={item.id}>{item.label}</label>
//             <input
//                 type="checkbox"
//                 id={item.id}
//                 name={item.id}
//                 value={categoriesArray[item.key]}
//                 onChange={() => handleCheckboxChange(item.key, !categoriesArray[item.key])}
//             /><br />
//         </div>
//     ))}
//     <br />
//     <button type="submit">בקשת עזרה</button>
// </form>
// </div>