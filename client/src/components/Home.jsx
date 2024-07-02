import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { fetchPostReq } from '../fetchFile';
import Header from './Header';

function Home() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);
    const navigate = useNavigate();

    return (
        <>
            <Header value={categoriesArray} />
            {currentUser.isManager && <h2>שלום מנהל</h2>}
           {!currentUser.isManager && <div className="background-animation" >
                <img className="img1" />
                <img className="img3" />
                <h1>{currentUser.username}</h1>
                <h2>ברוכים הבאים למערכת ההתנדבות הארצית לנפגעי המלחמה</h2>
                <h2>הנכם מוזמנים לקחת חלק </h2>
            </div>}
        </>
    )
}
export default Home;