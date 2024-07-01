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
            <div className="divStyle" >
                <h2>בקשתך התקבלה, בקרוב ניצור איתך קשר</h2>
            </div>

        </>
    )
};
export default ToNeedy;