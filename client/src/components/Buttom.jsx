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
        }, 2000);

        return () => clearTimeout(moveRightTimer);
    }, []);
    return (

        <div className="Buttom">
            <p>פיקוד העורף - 104__</p>
            <p>__mitnadvim@gmail.com מייל:__</p>
            <p>__בטלפון:  033003300__</p>
            <p>__ליצירת קשר:__</p>            
            <p>__אתר מתנדבים מלחמת חרבות </p>
        </div>
    )
};
export default Buttom;