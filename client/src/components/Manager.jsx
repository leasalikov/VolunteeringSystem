import '../Style.css';
import { React, useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { fetchGetReq } from '../fetchFile';

const Manager = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    async function LinkVolunteering(){
        // get all linking
        const response = await fetchGetReq("linking");
        const data = await response;
        console.log("data    ", data);
    }

    const logOut = () => {
        navigate(`/login`)
        setCurrentUser(null);
        localStorage.removeItem('currentUser')
    }

    return (
        <div >
            <button className="HeaderButton" onClick={LinkVolunteering}>לפרטי ההתנדבויות המתואמים</button>
            <button className="HeaderButton" onClick={logOut}>התנתקות</button>
        </div>
    )
};
export default Manager;