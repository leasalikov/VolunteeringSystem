
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from '../App';
import Header from './Header';
import Buttom from './Buttom';

import { useLocation, useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
import { fetchDeleteReq } from '../fetchFile';
import { fetchGetByReq } from '../fetchFile';
import { PostEmail } from '../EmailFunction';
import Logo from './Logo';
import { Card } from 'primereact/card';
// import { PostEmail } from '../EmailFunction';

function Volunteer() {

    const [showEndMassage, setShowEndMassage] = useState(false);
    const [showComponent, setShowComponent] = useState(true);
    const [showEmptyArray, setShowEmptyArray] = useState();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [data, setData] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const idcategoryArray = JSON.stringify(location.state.data.idcategoryArray);
                const usernamevolunteers = currentUser.username;
                const response = await fetchGetByReq("needyVolunteers", idcategoryArray, usernamevolunteers);
                const fetchedData = await response;
                setData(fetchedData);
                const allArraysEmpty = fetchedData.every(innerArray => innerArray.length === 0);
                if (allArraysEmpty) {
                    setShowEmptyArray(true);
                    setShowComponent(false);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    async function linking(linkUser) {
        const paramsToSent = {
            "usernameneedies": linkUser.username, //needy id
            "namecategory": linkUser.namecategory, //id category - needy and volunteer 
            "usernamevolenteers": currentUser.username, //volunteer username
        };
        let linkingData;
        const result = window.confirm("האם אתה בטוח שברצונך להתנדב בהתנדבות זו?");
        if (result) {
            try {
                //post to linking
                const response = await fetchPostReq("linking", paramsToSent);
                linkingData = await response;
                //result, idcategoryV, idcategoryN
            }
            catch (error) {
                console.error(error);
            }
            try {
                //delete in volunteer
                const idcategoryvolunteer = linkingData.idcategoryvolunteer;
                const response = await fetchDeleteReq("volunteer", idcategoryvolunteer);
                const data1 = await response;
            }
            catch (error) {
                console.error(error);
            }
            try {
                //delete in needy
                const idcategoryneedy = linkingData.idcategoryneedy;
                const response = await fetchDeleteReq("needy", idcategoryneedy);
                const data2 = await response;
            }
            catch (error) {
                console.error(error);
            }
            if (data) {
                setShowEndMassage(true)
                setShowComponent(false)
            }
            // req post Email
            // const response = PostEmail(linkUser.idUser, linkUser.name, linkUser.username, linkUser.email)
            // const emailData = await response;
            // console.log("emailData ", emailData);

            const updatedData = Object.keys(data)
                .map(key => data[key])
                .map(item => item.filter(item => (item.namecategory === linkUser.namecategory)
                    && (item.idUser === linkUser.idUser && item.namecategory !== linkUser.namecategory) || (item.namecategory !== linkUser.namecategory)));
            setData(updatedData);
        }
    }

    function addVolunting() {
        setShowEndMassage(false);
        setShowComponent(true);
        const allArraysEmpty = data.every(innerArray => innerArray.length === 0);
        if (allArraysEmpty) {
            setShowEmptyArray(true);
            setShowComponent(false);
        }
    }
    function toHome() {
        navigate(`/users/${currentUser.idUser}/home`);
    }
    return (
        <>
            <Logo />
            <Header />
            <Buttom />
            {showEndMassage &&
                <div>
                    <Card className="p-card">
                    <h2>!תודה ותזכו למצוות<br />כעת נשלח לך מייל עם פרטי המזמין ליצירת קשר</h2>
                    <button onClick={addVolunting}>להוספת התנדבות</button>
                    </Card>
                </div>}
            {showEmptyArray && <div>
                <Card className="p-card">
                <h2>כעת אין בקשות עזרה בהתאם לקטגוריות שבחרתם, תודה על הרצון הטוב! נסו מאוחר יותר</h2>
                <button onClick={toHome}>חזרה לתפריט הראשי</button></Card>
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
                                    <td><button onClick={() => linking(item)}>
                                    <i className="pi pi-user" style={{ marginRight: '8px' }}></i>
                                    </button></td>
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
        </>
    )
};
export default Volunteer;