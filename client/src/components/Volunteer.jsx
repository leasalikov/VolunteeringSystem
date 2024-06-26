
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from '../App';
import { useLocation } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
const Volunteer = () => {

    const [showEndMassage, setShowEndMassage] = useState(false)
    const [showComponent, setShowComponent] = useState(true)
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const location = useLocation();
    console.log("data ", location.state.data[0][0].idUser)
    async function linking(id) {
        console.log("id: ", id)
        const result = window.confirm("האם אתה בטוח שברצונך להתנדב בהתנדבות זו?");
        if (result) {
            setShowEndMassage(true)
            setShowComponent(false)
            // navigate(`/users/${currentUser.idUser}/volunteer`, { state: { data: data.result4 } })
            const paramsToSend = { "id": id }
            const response = await fetchPostReq("volunteer", paramsToSend)
        }
    }
    function addVolunting(){
        setShowEndMassage(false);
        setShowComponent(true)
    }

    return (
        <>
        {showEndMassage &&
        <div>
        <h2>!תודה ותזכו למצוות<br/>כעת ישלח אליך מייל עם פרטי המזמין ליצירת קשר</h2>
        <button onClick={addVolunting}>להוספת התנדבות</button>
        </div>}
        {showComponent && <div>
            <h1>שלום {currentUser.username}!!</h1>
            <h2>מעריכים אותך על נכונותך לעזור ולקחת חלק, לפניך האפשרויות הרלוונטיות בהתאם לבחירתך.</h2>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {location.state.data.map((item, i) => (
                        <tr key={i}>
                            <td>{item[0].username}</td>
                            <td>{item[0].email}</td>
                            <td>{item[0].phone}</td>

                            <button onClick={() => linking(item[0].idUser)}>V</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>}
        </>
    )
};
export default Volunteer;