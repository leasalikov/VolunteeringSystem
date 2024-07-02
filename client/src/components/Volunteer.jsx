
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from '../App';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
import { fetchGetReq } from '../fetchFile';

function Volunteer() {

    const [showEndMassage, setShowEndMassage] = useState(false)
    const [showComponent, setShowComponent] = useState(true)

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [data, setData] = useState();

    const location = useLocation();

    // console.log("location.state.data.idcategoryArray  ", location.state.data.idcategoryArray)
    // console.log("location.state.data  ", location.state.data)
    // console.log("currentUser  ", currentUser)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const idcategoryArray = JSON.stringify(location.state.data.idcategoryArray);// Example params
                const usernamevolunteers = currentUser.username;
                const params = { idcategoryArray, usernamevolunteers }
                console.log("params", params)
                const response = await fetchGetReq("needyVolunteers", idcategoryArray, usernamevolunteers);
                const fetchedData = await response;
                console.log("fetchedData    ", fetchedData);
                setData(fetchedData);
            } catch (error) {
                console.error(error);
            }
        };
        // console.log("data out  ", data)
        fetchData();
    }, []);

    console.log("data out  ", data)

    async function linking(linkUser) {
        const paramsToSent = {
            "usernameneedies": linkUser.username, //needy id
            "namecategory": linkUser.namecategory, //id category - needy and volunteer 
            "usernamevolenteers": currentUser.username, //volunteer username
        };
        console.log("paramsToSent: ", paramsToSent)
        const result = window.confirm("האם אתה בטוח שברצונך להתנדב בהתנדבות זו?");
        if (result) {
            try {
                //post to linking
                const response = await fetchPostReq("linking", paramsToSent);
                const linkingData = await response;
                console.log("linkingdata  ", linkingData)
            }
            catch (error) {
                console.error(error);
            }
            if (data) {
                setShowEndMassage(true)
                setShowComponent(false)
            }

            const updatedData = Object.keys(data)
                .map(key => data[key])
                .map(item => item.filter(item => (item.idUser !== linkUser.idUser && item.namecategory === linkUser.namecategory)
                    || (item.idUser === linkUser.idUser && item.namecategory !== linkUser.namecategory) || item.namecategory !== linkUser.namecategory));
            // .filter(item => (item.idUser == linkUser.idUser) && (item.namecategory == linkUser.namecategory));
            console.log("updatedDataaaaaaaaaaaaa ", updatedData)
            setData(updatedData);
        }
    }

    async function addVolunting() {
        setShowEndMassage(false);
        setShowComponent(true);
    }

    return (
        <>
            <div>
                <Header />
                {showEndMassage &&
                    <div>
                        <h2>!תודה ותזכו למצוות<br />כעת ישלח אליך מייל עם פרטי המזמין ליצירת קשר</h2>
                        <button onClick={addVolunting}>להוספת התנדבות</button>
                    </div>}
                {showComponent && <div>
                    <h1>שלום {currentUser.username}!!</h1>
                    <h2>מעריכים אותך על נכונותך לעזור ולקחת חלק, לפניך האפשרויות הרלוונטיות בהתאם לבחירתך.</h2>
                    <table className='tableStyle'>
                        <thead>
                            <tr>
                                <th>בחר</th>
                                <th>קטגוריה</th>
                                <th>טלפון</th>
                                <th>מייל</th>
                                <th>שם</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                item.map((item, i) => (
                                    <tr key={i}>
                                        <td><button onClick={() => linking(item)}>V</button></td>
                                        <td>{item.namecategory}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>}
            </div >
        </>
    )
};
export default Volunteer;
