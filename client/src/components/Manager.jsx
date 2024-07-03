import '../Style.css';
import { React, useContext, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { fetchGetReq } from '../fetchFile';

const Manager = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [showLinkVolunteering, setShowLinkVolunteering] = useState(false);
    const [data, setData] = useState();

    const navigate = useNavigate();

    async function LinkVolunteering() {
        // get all linking
        const response = await fetchGetReq("linking");
        const result = await response;
        console.log("result    ", result);
        setShowLinkVolunteering(!showLinkVolunteering)
        setData(result);
    }

    const logOut = () => {
        navigate(`/login`)
        setCurrentUser(null);
        localStorage.removeItem('currentUser')
    }

    return (
        <>
            <div >
                <button className="HeaderButton" onClick={LinkVolunteering}>לפרטי ההתנדבויות המתואמים</button>
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
                                {/* <td>{item.username}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </>

    )
};
export default Manager;