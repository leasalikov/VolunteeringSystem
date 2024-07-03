import '../Style.css';
import { React, useContext, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { fetchGetReq } from '../fetchFile';

const Manager = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [showLinkVolunteering, setShowLinkVolunteering] = useState(false);
    const [showAllVolunteers, setShowAllVolunteers] = useState(false);
    const [showAllNeedies, setShowAllNeedies] = useState(false);

    const [data, setData] = useState();

    const navigate = useNavigate();
    const logOut = () => {
        navigate(`/login`)
        setCurrentUser(null);
        localStorage.removeItem('currentUser')
    }

    async function LinkVolunteering() {
        if (!showLinkVolunteering) {
            // get all linking
            // try {
                const response = await fetchGetReq("linking");
                const result = await response;            
                console.log("result    ", result);
            // }
            // catch{
            //     console.log(error)
            // }
            setShowLinkVolunteering(!showLinkVolunteering)
            setData(result);
        }
        else {
            setShowLinkVolunteering(!showLinkVolunteering)
        }
    }

    async function allVolunteers() {
        if (!showAllVolunteers) {
            const response = await fetchGetReq("volunteer");
            const result = await response;
            console.log("result    ", result);
            setShowAllVolunteers(!showAllVolunteers)
            setData(result);
            console.log("data  ", data)
        }
        else {
            setShowAllVolunteers(!showAllVolunteers)
        }
    }
    async function allNeedies() {
        if (!showAllNeedies) {
            const response = await fetchGetReq("needy");
            const result = await response;
            console.log("result    ", result);
            setShowAllNeedies(!showAllNeedies)
            setData(result);
            console.log("data  ", data)
        }
        else {
            setShowAllNeedies(!showAllNeedies)
        }
    }

    return (
        <>
            <div >
                <button className="HeaderButton" onClick={LinkVolunteering}>לפרטי ההתנדבויות המתואמים</button>
                <button className="HeaderButton" onClick={allVolunteers}>מתנדבים</button>
                <button className="HeaderButton" onClick={allNeedies}>מבקשי עזרה</button>
                <button className="HeaderButton" onClick={logOut}>התנתקות</button>
            </div>
            {showLinkVolunteering &&
                <table className='tableStyle'>
                    <thead>
                        <tr>
                            {/* <th>מייל מבקש עזרה</th> */}
                            <th>שם מבקש עזרה</th>
                            {/* <th>מייל מתנדב</th> */}
                            <th>שם מתנדב</th>
                            <th>קטגוריה</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.resultLinking.map((item, i) => (
                            <tr key={i}>
                                <td>{item.username}</td>
                                <td>{item.name}</td>
                                <td>{item.namecategory}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            {showAllVolunteers &&
                <table className='tableStyle'>
                    <thead>
                        <tr>
                            <th>שם מתנדב</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            {showAllNeedies &&
                <table className='tableStyle'>
                    <thead>
                        <tr>
                            <th>שם מבקש עזרה</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </>

    )
};
export default Manager;