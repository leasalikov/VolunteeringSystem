
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from '../App';
import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { fetchPostReq } from '../fetchFile';
// import { fetchGetReq } from '../fetchFile';
import { fetchGetByReq } from '../fetchFile'
import { PostEmail } from '../EmailFunction';

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
            //req post Email{
            const response = PostEmail(linkUser.idUser, linkUser.name, linkUser.username, linkUser.email)
            const emailData = await response;
            console.log("emailData ", emailData);
            //}

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
        console.log("allArraysEmpty  ", allArraysEmpty)
        console.log("length  ", data[0].length, data[1].length, data[2].length)
        if (allArraysEmpty) {
            console.log('All arrays in the main array are empty.');
            setShowEmptyArray(true);
            setShowComponent(false);
        } else {
            console.log('Not all arrays in the main array are empty.');
        }
    }
    function toHome() {
        navigate(`/users/${currentUser.idUser}/home`);
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
                {showEmptyArray && <div>
                    <h2>כעת אין בקשות עזרה באתאם לקטגוריות שבחרת, תודה על הרצון הטוב! נסה מאוחר יותר</h2>
                    <button onClick={toHome}>חזרה לתפריט הראשי</button>
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