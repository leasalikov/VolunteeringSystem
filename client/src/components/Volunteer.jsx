
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

    console.log("location.state.data.idcategoryArray  ", location.state.data.idcategoryArray)
    console.log("location.state.data  ", location.state.data)
    console.log("currentUser  ", currentUser)

    // gets needies that suit to volunteer
    // const Array = JSON.stringify(location.state.data.idcategoryArray);
    // console.log("location.state.data.idcategoryArry ", location.state.data.idcategoryArray)

    // console.log("Array ", Array)
    // try {
    //     const response = await fetchGetReq("needyVolunteers", Array);
    //     const data = await response;
    //     console.log(data)
    // }
    // catch (error) {
    //     console.error(error);
    // }

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
        console.log("data out  ", data)
        fetchData();
    }, []);

    console.log("data out  ", data)

    async function linking(item) {
        const paramsToSent = {
            "idneedies": item.idUser, //needy id
            "namecategory": item.namecategory, //id category - needy and volunteer 
            "usernamevolenteers": currentUser.username, //volunteer username
        };
        console.log("paramsToSent: ", paramsToSent)
        const result = window.confirm("האם אתה בטוח שברצונך להתנדב בהתנדבות זו?");
        if (result) {
            try {
                //post to linking
                const response = await fetchPostReq("linking", paramsToSent);
                const data = await response;
                console.log("linkingdata  ", data)
            }
            catch (error) {
                console.error(error);
            }
            if (data) {
                setShowEndMassage(true)
                setShowComponent(false)
            }
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
                                <th>name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                item.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.namecategory}</td>
                                        {/* <td>{item[0].idUser}</td> */}
                                        <td><button onClick={() => linking(item)}>V</button></td>
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
