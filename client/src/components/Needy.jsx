import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
const Needy = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    return(
        <>
        <h1>Hi {currentUser.username}</h1>
        </>
    )
};
export default Needy;