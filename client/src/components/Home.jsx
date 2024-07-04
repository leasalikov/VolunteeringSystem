import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { fetchPostReq } from '../fetchFile';
import Header from './Header';
import Manager from './Manager';
import Buttom from './Buttom';

function Home() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ אוכל: false }, { אירוח: false }, { משחקים: false }, { בייביסיטר: false }]);
    const navigate = useNavigate();

    return (
        <>
            <Buttom value={categoriesArray} />
            {currentUser.isManager && <>
                <h2>שלום מנהל</h2>
                <Manager value={categoriesArray} />
            </>}
            {!currentUser.isManager && <>
                <Header value={categoriesArray} />
                <div className="background-animation" >
                    <img className="img1" />
                    <img className="img3" />
                    <h1> שלום  {currentUser.username}</h1>
                    <h2>ברוכים הבאים למערכת ההתנדבות הארצית לנפגעי המלחמה</h2>
                    <h2>הנכם מוזמנים לקחת חלק </h2>
                </div></>}
        </>
    )
}
export default Home;