
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from '../App';
import { useLocation } from 'react-router-dom';
const Volunteer = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const  location  = useLocation();
    console.log("data ", location.state.data[0][0].idUser) 

    return (
        <>
            <h1>שלום {currentUser.username}!!</h1>
            <h2>מעריכים אותך על נכונותך לעזור ולקחת חלק, לפניך האפשרויות הרלוונטיות בהתאם לבחירתך.</h2>
          
            
                    {location.state.data.map((item,i) => (
                        <tr key={i}>
                           
                           {item[0].username}
                        </tr>
                    ))}
            
            
        </>
    )
};
export default Volunteer;