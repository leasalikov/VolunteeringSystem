
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from '../App';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { fetchPostReq } from '../fetchFile';
import { fetchGetReq } from '../fetchFile';

// import { PostUser } from "./UserFunctions";

async function Volunteer() {

    const [showEndMassage, setShowEndMassage] = useState(false)
    const [showComponent, setShowComponent] = useState(true)
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const location = useLocation();

    console.log("location  ", location.state.data.idcategoryArray)
    console.log("currentUser  ", currentUser)

    // gets needies that suit to volunteer
    const Array = JSON.stringify(location.state.data.idcategoryArray);
    console.log("location.state.data ", location.state.data)

    console.log("Array ", Array)
    try {
        const response = await fetchGetReq("needyVolunteers", Array);
        const data = await response;
        console.log("fetchGetReq data ", data)
    }
    catch (error) {
        console.error(error);
    }

    // async function linking(item) {
    //     const paramsToSent = {
    //         "idneedies": item[0].idUser, //needy id
    //         "namecategory": item.namecategory[0].namecategory, //id category - needy and volunteer 
    //         "username": currentUser.username, //volunteer username
    //     };
    //     console.log("paramsToSent: ", paramsToSent)
    //     const result = window.confirm("האם אתה בטוח שברצונך להתנדב בהתנדבות זו?");
    //     if (result) {
    //         setShowEndMassage(true)
    //         setShowComponent(false)
    //         //post to linking
    //         const response = await fetchPostReq("linking", paramsToSent);
    //         const data = await response;
    //         console.log(data)
    //     }
    // }

    async function addVolunting() {
        setShowEndMassage(false);
        setShowComponent(true);
    }

    return (
        <>
            <Header />
            {showEndMassage &&
                <div>
                    <h2>!תודה ותזכו למצוות<br />כעת ישלח אליך מייל עם פרטי המזמין ליצירת קשר</h2>
                    <button onClick={addVolunting}>להוספת התנדבות</button>
                </div>}
            {showComponent && <div>
                <h1>שלום {currentUser.username}!!</h1>
                <h2>מעריכים אותך על נכונותך לעזור ולקחת חלק, לפניך האפשרויות הרלוונטיות בהתאם לבחירתך.</h2>
               
                
            </div>}
        </>
    )
};
export default Volunteer;


// <table>
// <thead>
//     <tr>
//         <th>name</th>
//         <th>email</th>
//         <th>phone</th>
//         <th>category</th>
//     </tr>
// </thead>
// <tbody>
//     {location.state.data.map((item, i) => (
//         <tr key={i}>
//             <td>{item[0].username}</td>
//             <td>{item[0].email}</td>
//             <td>{item[0].phone}</td>
//             <td>{item.namecategory[0].namecategory}</td>
//             {/* <td>{item[0].idUser}</td> */}
//             <td><button onClick={() => linking(item)}>V</button></td>
//         </tr>
//     ))}
// </tbody>
// </table>