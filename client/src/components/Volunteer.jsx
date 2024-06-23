import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
// import { fetchGetReq } from '../fetchFile';
const Volunteer = () => {
    console.log("??????????????????????????????????????")
    const { currentUser, setCurrentUser } = useContext(UserContext);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('`http://localhost:8080/needy')
    //       .then(response => response.json())
    //       .then(data => setData(data))
    //       .catch(error => console.error('Error:', error));
    //   }, []);
    // setData(data);
    return (
        <>
            <h1>שלום {currentUser.username}!!</h1>
            <h2>מעריכים אותך על נכונותך לעזור ולקחת חלק, לפניך האפשרויות הרלוונטיות בהתאם לבחירתך.</h2>
            {/* <table>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    )
};
export default Volunteer;