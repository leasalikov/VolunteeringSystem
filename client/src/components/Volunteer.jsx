
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from '../App';
import { useLocation } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
// import { PostUser } from "./UserFunctions";

const Volunteer = () => {

    const [showEndMassage, setShowEndMassage] = useState(false)
    const [showComponent, setShowComponent] = useState(true)
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const location = useLocation();
    console.log("data ", location.state.data[0][0].idUser)
    console.log("namecategory ", location.state.data[0].namecategory[0].namecategory)
    console.log("result4 ", location.state.data)
    console.log("current ", currentUser)

    async function linking(item) {
        const paramsToSent = {
            "idneedies": item[0].idUser, //needy id
            "namecategory": item.namecategory[0].namecategory, //id category - needy and volunteer 
            "username": currentUser.username, //volunteer username
        };
        console.log("paramsToSent: ", paramsToSent)
        const result = window.confirm("האם אתה בטוח שברצונך להתנדב בהתנדבות זו?");
        if (result) {
            setShowEndMassage(true)
            setShowComponent(false)
            // const response = await fetchPostReq("linking", paramsToSent)
            // const data = await response;
            // const PostEmail = async (id, name, email) => {
            //     const h = { Id: currentUser.idUser, Name: currentUser.username, Email: currentUser.email }
            //     await PostUser()
            //     fetch('http://localhost:8000/api/Email', {
            //         method: 'POST', body: JSON.stringify(h)
            //         , mode: 'cors', headers: {
            //             'Content-Type': 'application/json'
            //         },
            //     }).then((response) => {
            //         return response.json()
            //     })
            //         .catch(h => console.log(h));
            // }
            // console.log("PostEmail ",PostEmail)
            const emailParams = {
                email: currentUser.email,
                message: "בקשת ההתנדבות שלך הוגשה בהצלחה."
            };
            const emailResponse = await fetch('http://localhost:8080/api/Email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailParams),
            });
            const emailData = await emailResponse.json();
            if (emailData.success) {
                console.log("Email sent successfully");
            } else {
                console.error("Failed to send email");
            }
        }
    }
    function addVolunting() {
        setShowEndMassage(false);
        setShowComponent(true)
    }

    return (
        <>
            {showEndMassage &&
                <div>
                    <h2>!תודה ותזכו למצוות<br />כעת ישלח אליך מייל עם פרטי המזמין ליצירת קשר</h2>
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
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {location.state.data.map((item, i) => (
                            <tr key={i}>
                                <td>{item[0].username}</td>
                                <td>{item[0].email}</td>
                                <td>{item[0].phone}</td>
                                <td>{item.namecategory[0].namecategory}</td>
                                {/* <td>{item[0].idUser}</td> */}
                                <td><button onClick={() => linking(item)}>V</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </>
    )
};
export default Volunteer;