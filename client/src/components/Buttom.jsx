import '../Style.css';
import { React, useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Buttom = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    return (

        <div className="Buttom">
            <div className='logo'></div>
            <p>אתר מתנדבים מלחמת חרבות ברזל</p>
            <p>ליצירת קשר: בטלפון: 033003300 במייל: mitnadvim@gmail.com </p>
            <p>פיקוד העורף: 106 </p>
        </div>
    )
};
export default Buttom;