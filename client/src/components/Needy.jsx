import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
// import { fetchPostReq } from '../fetchFile';
import Header from './Header';
const ToNeedy = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="background-animation" >
                <p>בקשתך התקבלה, בקרוב ניצור איתך קשר</p>
            </div>

        </>
    )
};
export default ToNeedy;