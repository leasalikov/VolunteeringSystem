import '../Style.css';
import { UserContext } from '../App';
import { React, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { fetchPostReq } from '../fetchFile';
import Header from './Header';
import Manager from './Manager';
import Buttom from './Buttom';
import Logo from './Logo';

function Home() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ אוכל: false }, { אירוח: false }, { משחקים: false }, { בייביסיטר: false }]);
    const [manager, setManager] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (currentUser.isManager) {
            setManager(true);
        } else {
            setManager(false);
        }
    }, [currentUser]);

    return (
        <>
        <Logo/>
            <Buttom value={categoriesArray} />
            {manager && <>
                <h2>שלום מנהל</h2>
                <Manager value={categoriesArray} />
            </>}
            {!currentUser.isManager && <>
                <Header value={categoriesArray} />
                <div>
                    <h1>!שלום {currentUser.username}</h1>
                    <h1>ברוכים הבאים למערכת ההתנדבות הארצית לנפגעי המלחמה </h1>
                    <br/>
                    <h2>ארוחות חמות, שמירה ועזרה עם ילדים, משחקים לילדים, ארוח למפונים וכל מה שיכול לעזור בתקופה שכזו.
                    יש לנו כבר אלפי מתנדבים, ניידים ובכל חלקי הארץ שרוצים ומחכים לתת סיוע למי שצריך</h2>
                    <br/>
                    <h2>?זקוקים לסיוע או מכירים מישהו שזקוק לסיוע</h2>
                    <h3>מלאו את הפרטים ונחבר לכם מתנדב/ת מתאים בהקדם</h3>
                    <br/>
                    <h2>?מעוניינים להצטרף למערך התמנדבים</h2>
                </div>
            </>}
        </>
    )
}
export default Home;