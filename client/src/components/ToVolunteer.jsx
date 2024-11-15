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
    const [categoriesArray, setCategoriesArray] = useState([{ אוכל: false }, { אירוח: false }, { משחקים: false }, { בייביסיטר: false }]);
    const navigate = useNavigate();
    // const [categoriesArray, setCategoriesArray] = useState({
    //      אוכל: false,
    //     אירוח: false,
    //     משחקים: false,
    //     בייביסיטר: false
    // });

    // const buttonsArray = [
    //     { id: 'food', label: 'ארוחות חמות', key: ' אוכל', className: 'foodImg' },
    //     { id: 'אירוח', label: 'אירוח', key: 'אירוח', className: 'hostImg' },
    //     { id: 'toys', label: 'משחקים לילדים', key: 'משחקים', className: 'toysImg' },
    //     { id: 'babysitter', label: 'בייביסיטר', key: 'בייביסיטר', className: 'babysitterImg' }
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
                    <button><submit button onClick={volunteering}>התנדבות</submit></button>
                </form>}
            </div>
            <Buttom />
        </>
    )
}
export default ToVolunteer;

// const [categoriesArray, setCategoriesArray] = useState([
//     { id: 'אוכל', label: 'ארוחות חמות', value: false, handler: (e) => setCategoriesArray({  אוכל: e.target.checked, אירוח: categoriesArray.אירוח, משחקים: categoriesArray.משחקים, בייביסיטר: categoriesArray.בייביסיטר }), className: 'אוכלImg' },
//     { id: 'אירוח', label: 'אירוח', value: false, handler: (e) => setCategoriesArray({  אוכל: categoriesArray. אוכל, אירוח: e.target.checked, משחקים: categoriesArray.משחקים, בייביסיטר: categoriesArray.בייביסיטר }), className: 'hostImg' },
//     { id: 'משחקים', label: 'משחקים לילדים', value: false, handler: (e) => setCategoriesArray({  אוכל: categoriesArray. אוכל, אירוח: categoriesArray.אירוח, משחקים: e.target.checked, בייביסיטר: categoriesArray.בייביסיטר }), className: 'משחקיםImg' },
//     { id: 'babysitter', label: 'בייביסיטר', value: false, handler: (e) => setCategoriesArray({  אוכל: categoriesArray. אוכל, אירוח: categoriesArray.אירוח, משחקים: categoriesArray.משחקים, בייביסיטר: e.target.checked }), className: 'בייביסיטרImg' }
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
