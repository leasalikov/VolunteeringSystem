import '../Style.css';
import { React, useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/users/${currentUser.idUser}/home`)
    }
    const goToVolunteer = () => {
        navigate(`/users/${currentUser.idUser}/tovolunteer`)
    }
    const goToNeedy = () => {
        navigate(`/users/${currentUser.idUser}/toneedy`)
    }
    const logOut = () => {
        navigate(`/login`)
        setCurrentUser(null);
        localStorage.removeItem('currentUser')
    }

    return (
        <>
        <div className="Header">
        {/* <div className='logo'></div> */}
            <button className="HeaderButton" onClick={goToHome}>קצת עלינו</button>
            {/* <div className='logo'></div> */}
            <button className="HeaderButton" onClick={goToVolunteer}>להתנדבות</button>
            {/* <div className='logo'></div> */}
            <button className="HeaderButton" onClick={goToNeedy}>לבקשת עזרה</button>
            {/* <div className='logo'></div> */}
            <button className="HeaderButton" onClick={logOut}>התנתקות</button>        
            {/* <div className='logo'></div> */}
        </div>

        </>
    )
};
export default Header;