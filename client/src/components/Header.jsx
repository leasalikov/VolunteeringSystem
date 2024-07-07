import '../Style.css';
import { React, useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css'; 

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
                <button className="HeaderButton" onClick={goToHome}>
                    <i className="pi pi-home" style={{ marginRight: '8px' }}></i>
                    קצת עלינו
                </button>
                <button className="HeaderButton" onClick={goToVolunteer}>
                    <i className="pi pi-user" style={{ marginRight: '8px' }}></i>
                    להתנדבות
                </button>
                <button className="HeaderButton" onClick={goToNeedy}>
                    <i className="pi pi-heart" style={{ marginRight: '8px' }}></i>
                    לבקשת עזרה
                </button>
                <button className="HeaderButton" onClick={logOut}>
                    <i className="pi pi-sign-out" style={{ marginRight: '8px' }}></i>
                    התנתקות
                </button>
            </div>
        </>
    )
};
export default Header;