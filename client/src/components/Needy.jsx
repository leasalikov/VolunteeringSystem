import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
import Buttom from './Buttom';

// import { fetchPostReq } from '../fetchFile';
import Header from './Header';
const ToNeedy = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ אוכל: false }, { אירוח: false }, { משחקים: false }, { בייביסיטר: false }]);
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Buttom />
            <div className="divStyle" >
                <h2>בקשתך התקבלה, בקרוב ניצור איתך קשר</h2>
            </div>

        </>
    )
};
export default ToNeedy;