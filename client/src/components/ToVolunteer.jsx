import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
import Logo from './Logo';
import Header from './Header';
import Buttom from './Buttom';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function ToVolunteer() {
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
            navigate(`/users/${currentUser.idUser}/volunteer`, { state: { data: data } });
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
                {<form onSubmit={volunteering}>
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
                    <button><submit button onClick={volunteering}>התנדבות</submit></button>
                </form>}
            </div>
            <Buttom />
        </>
    )
}
export default ToVolunteer;

// const [categoriesArray, setCategoriesArray] = useState([
//     { id: 'food', label: 'ארוחות חמות', value: false, handler: (e) => setCategoriesArray({  food: e.target.checked, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter }), className: 'foodImg' },
//     { id: 'hosting', label: 'hosting', value: false, handler: (e) => setCategoriesArray({  food: categoriesArray. food, hosting: e.target.checked, toys: categoriesArray.toys, babysitter: categoriesArray.babysitter }), className: 'hostImg' },
//     { id: 'toys', label: 'toys לילדים', value: false, handler: (e) => setCategoriesArray({  food: categoriesArray. food, hosting: categoriesArray.hosting, toys: e.target.checked, babysitter: categoriesArray.babysitter }), className: 'toysImg' },
//     { id: 'babysitter', label: 'babysitter', value: false, handler: (e) => setCategoriesArray({  food: categoriesArray. food, hosting: categoriesArray.hosting, toys: categoriesArray.toys, babysitter: e.target.checked }), className: 'babysitterImg' }
// ]);


// return (
//     <>
//         <Header />
//         <div className="divStyle">
//             <form onSubmit={volunteering}>
//                 {buttonsArray.map(item => (
//                     <div className='type' key={item.key}>
//                         <button onClick={() => handleCheckboxChange(item.key, !categoriesArray[item.key])} className={item.className}></button>
//                         <br />
//                         <label htmlFor={item.id}>{item.label}</label>
//                         <input
//                             type="checkbox"
//                             id={item.id}
//                             name={item.id}
//                             value={categoriesArray[item.key]}
//                             onChange={() => handleCheckboxChange(item.key, !categoriesArray[item.key])}
//                         /><br />
//                     </div>
//                 ))}
//                 <br />
//                 <button type="submit">התנדבות</button>
//             </form>
//         </div>
//         <Buttom />
//     </>
// );
