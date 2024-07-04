import '../Style.css';
import { React, useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Buttom = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [isMoved, setIsMoved] = useState(false);

    useEffect(() => {
        const moveRightTimer = setTimeout(() => {
            setIsMoved(true);
        }, 2000); // Add a delay of 2 seconds before moving to the right

        return () => clearTimeout(moveRightTimer);
    }, []);
    return (

        <div className={`Buttom ${isMoved ? 'moveRight' : ''}`}>
            {/* <div className='logo'></div> */}
            <p>אתר מתנדבים מלחמת חרבות ברזל</p>
            <p>ליצירת קשר: בטלפון: 033003300 במייל: mitnadvim@gmail.com </p>
            <p>פיקוד העורף: 106 </p>
        </div>
    )
};
export default Buttom;