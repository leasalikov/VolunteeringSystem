import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
import Header from './Header';

function EndVolunteering() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);
    const navigate = useNavigate();
    const location = useLocation();

    async function addVolunting() {
        navigate(`/users/${currentUser.idUser}/volunteer`, { state: { data: data } });
    }
    return (
        <>
            <div>
                <h2>!תודה ותזכו למצוות<br />כעת ישלח אליך מייל עם פרטי המזמין ליצירת קשר</h2>
                <button onClick={addVolunting}>להוספת התנדבות</button>
            </div>
        </>
    )
}
export default EndVolunteering;