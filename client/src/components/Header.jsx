import '../Style.css';
import { React, useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    // <style margin-top={0}/>
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log("Header   ", currentUser)
    // console.log("categoriesArray   ", categoriesArray)

    const navigate = useNavigate();

    const goToHome = () => {
        delete
            navigate(`/users/${currentUser.idUser}/home`)
    }
    const goToVolunteer = () => {
        navigate(`/users/${currentUser.idUser}/tovolunteer`)
    }
    const goToNeedy = () => {
        navigate(`/users/${currentUser.idUser}/toneedy`)
    }

    return (
        <div className="Header">
            <button className="HeaderButton" onClick={goToHome}>קצת עלינו</button>
            <button className="HeaderButton" onClick={goToVolunteer}>להתנדבות</button>
            <button className="HeaderButton" onClick={goToNeedy}>לבקשת עזרה</button>
        </div>
    )
};
export default Header;