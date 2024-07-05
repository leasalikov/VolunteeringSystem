import '../Style.css';
import { React, useContext, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { fetchGetReq } from '../fetchFile';
import Buttom from './Buttom';
import Logo from './Logo';

const Manager = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [showLinkVolunteering, setShowLinkVolunteering] = useState(false);
    const [showAllVolunteers, setShowAllVolunteers] = useState(false);
    const [showAllNeedies, setShowAllNeedies] = useState(false);
    const [showAddCategory, setShowAddCategory] = useState(false);

    const [showEmptyArray, setShowEmptyArray] = useState();

    const [data, setData] = useState();

    const navigate = useNavigate();
    const logOut = () => {
        navigate(`/login`)
        setCurrentUser(null);
        localStorage.removeItem('currentUser')
    }

    async function LinkVolunteering() {
        setShowAddCategory(false)
        setShowEmptyArray(false);
        setShowAllNeedies(false);
        setShowAllVolunteers(false);
        if (!showLinkVolunteering) {
            // get all linking
            const response = await fetchGetReq("linking");
            const result = await response;
            console.log("result    ", result);
            setShowLinkVolunteering(!showLinkVolunteering)
            setData(result);
            console.log("data  ", data)
            if (result.length === 0) {
                setShowEmptyArray(true);
                setShowLinkVolunteering(false)
            }
        }
        else {
            setShowLinkVolunteering(!showLinkVolunteering)
        }
    }

    async function allVolunteers() {
        setShowEmptyArray(false);
        setShowAddCategory(false)

        setShowAllNeedies(false);
        setShowLinkVolunteering(false);
        if (!showAllVolunteers) {
            const response = await fetchGetReq("volunteer");
            const result = await response;
            console.log("result    ", result);
            setShowAllVolunteers(!showAllVolunteers)
            setData(result);
            console.log("data  ", data)
            if (result.length === 0) {
                setShowEmptyArray(true);
                setShowAllVolunteers(false)
            }
        }
        else {
            setShowAllVolunteers(!showAllVolunteers)
        }
    }
    async function allNeedies() {
        setShowEmptyArray(false);
        setShowAddCategory(false)
        setShowAllVolunteers(false);
        setShowLinkVolunteering(false);
        if (!showAllNeedies) {
            const response = await fetchGetReq("needy");
            const result = await response;
            console.log("result    ", result);
            setShowAllNeedies(!showAllNeedies)
            setData(result);
            console.log("data  ", data)
            if (result.length === 0) {
                setShowEmptyArray(true);
                setShowAllNeedies(false)
            }
        }
        else {
            setShowAllNeedies(!showAllNeedies)
        }
    }
    async function addCategory() {
        setShowEmptyArray(false);
        setShowAllVolunteers(false);
        setShowLinkVolunteering(false);
        setShowAllNeedies(false);
        if (!showAddCategory) {
            // const response = await fetchGetReq("needy");
            // const result = await response;
            // console.log("result    ", result);
            // setShowAllNeedies(!showAllNeedies)
            // setData(result);
            // console.log("data  ", data)
            // if (result.length === 0) {
            //     setShowEmptyArray(true);
            //     setShowAllNeedies(false)
            // }
        }
        else {
            setShowAllNeedies(!showAllNeedies)
        }
    }

    return (
        <>
            <Logo />
            <Buttom />
            <div >
                <button className="HeaderButton" onClick={addCategory}>להוספת קטגוריה</button>
                <button className="HeaderButton" onClick={LinkVolunteering}>לפרטי ההתנדבויות המתואמים</button>
                <button className="HeaderButton" onClick={allVolunteers}>מתנדבים שלא שובצו</button>
                <button className="HeaderButton" onClick={allNeedies}>מבקשי עזרה שלא שובצו </button>
                <button className="HeaderButton" onClick={logOut}>התנתקות</button>
            </div>
            {showLinkVolunteering &&
                <table className='tableStyle'>
                    <thead>
                        <tr><th>שם מבקש עזרה</th>
                            <th>שם מתנדב</th>
                            <th>קטגוריה</th> </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.username}</td>
                                <td>{item.name}</td>
                                <td>{item.namecategory}</td> </tr>
                        ))}
                    </tbody>
                </table>}
            {showAllVolunteers &&
                <table className='tableStyle'>
                    <thead>
                        <tr><th>מייל מתנדב</th>
                            <th>שם מתנדב</th>
                            <th>קטגוריה</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.namecategory}</td></tr>
                        ))}
                    </tbody>
                </table>}
            {showAllNeedies &&
                <table className='tableStyle'>
                    <thead>
                        <tr>
                            <th>מייל מבקש עזרה</th>
                            <th>שם מבקש עזרה</th>
                            <th>קטגוריה</th></tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.namecategory}</td> </tr>
                        ))}
                    </tbody>
                </table>}
            {showEmptyArray &&
                <>
                    <h2>המאגר ריק</h2>
                </>}
            {showAddCategory &&
                <>
                    <h2></h2>
                </>}
        </>
    )
};
export default Manager;