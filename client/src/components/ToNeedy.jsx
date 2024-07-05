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
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);
    const navigate = useNavigate();
    // const [categoriesArray, setCategoriesArray] = useState({
    //      food: false,
    //     hosting: false,
    //     toys: false,
    //     babysitter: false
    // });

    // const buttonsArray = [
    //     { id: 'food', label: 'ארוחות חמות', key: ' food', className: 'foodImg' },
    //     { id: 'hosting', label: 'hosting', key: 'hosting', className: 'hostImg' },
    //     { id: 'toys', label: 'toys לילדים', key: 'toys', className: 'toysImg' },
    //     { id: 'babysitter', label: 'babysitter', key: 'babysitter', className: 'babysitterImg' }
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
    // const foodImg = () => {

    // }
    const hostImg = () => {

    }
    const toysImg = () => {

    }
    const babysitterImg = () => {

    }
    const [isChecked, setIsChecked] = useState(false);

    const foodImg = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <Logo />
            <Header />
            <div className="divStyle">
                {<form onSubmit={getHelp}>
                    <div className='type'>
                        <button onClick={foodImg} className='foodImg'></button>
                        <br />
                        <label for=" food">ארוחות חמות</label>
                        <input type="checkbox" id="food" name="food" value={categoriesArray.food} onChange={(e) => setCategoriesArray({ food: e.target.checked, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter })} /><br />
                        <button onClick={hostImg} className='hostImg'></button>
                        <br />
                        <label for="hosting">אירוח</label>
                        <input type="checkbox" id="hosting" name="hosting" value={categoriesArray.hosting} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: e.target.checked, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter })} /><br />
                    </div>
                    <div className='type'>
                        <button onClick={toysImg} className='toysImg'></button>
                        <br />
                        <label for="toys">משחקים לילדים</label>
                        <input type="checkbox" id="toys" name="toys" value={categoriesArray.toys} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: e.target.checked, babysitter: categoriesArray.babysitter })} /><br />

                        <button onClick={babysitterImg} className='babysitterImg'></button>
                        <br />
                        <label for="babysitter">בייביסיטר</label>
                        <input type="checkbox" id="babysitter" name="babysitter" value={categoriesArray.babysitter} onChange={(e) => setCategoriesArray({ food: categoriesArray.food, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: e.target.checked })} /><br />
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