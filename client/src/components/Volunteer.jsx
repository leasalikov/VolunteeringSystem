import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
const Volunteer = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    return(
        <>
        <h1>שלום {currentUser.username}!!</h1>
        <h2>מעריכים אותך על נכונותך לעזור ולקחת חלק, לפניך האפשרויות הרלוונטיות בהתאם לבחירתך.</h2>
        </>
    )
};
export default Volunteer;