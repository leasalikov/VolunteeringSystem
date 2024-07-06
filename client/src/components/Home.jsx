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
    const [categoriesArray, setCategoriesArray] = useState([{ food: false }, { hosting: false }, { toys: false }, { babysitter: false }]);
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
                    <h3>ארוחות חמות, שמירה ועזרה עם ילדים, משחקים לילדים, ארוח למפונים וכל מה שיכול לעזור בתקופה שכזו.
                    יש לנו כבר אלפי מתנדבים, ניידים ובכל חלקי הארץ שרוצים ומחכים לתת סיוע למי שצריך</h3>
                    <h2>זקוקים לסיוע או מכירים מישהו שזקוק לסיוע?</h2>
                    <h2>מעוניינים להצטרף למערך התמנדבים?</h2>
                    {/* <p>
                        אתר ההתנדבות "עוזרי חרבות הברזל" נבנה במיוחד למען נפגעי ומפוני מלחמת חרבות הברזל, אשר גרמה לנזקים רבים ולפגיעות קשות בנפש וברכוש. באתר תוכלו למצוא מגוון קטגוריות להתנדבות ובקשת עזרה. בין הקטגוריות תוכלו למצוא סיוע רגשי ונפשי, תמיכה במזון וביגוד, עזרה במציאת דיור זמני, וסיוע במציאת עבודה חדשה. כל מתנדב ומתנדבת באתר שלנו הם אנשים מסורים ובעלי לב רחב, שהחליטו להקדיש מזמנם ומרצם לעזור לאלו שנפגעו במלחמה הקשה הזו.
                    </p>
                    <p>
                        החשיבות שבעזרה זו היא עצומה. כל רגע של תשומת לב, כל חיוך וכל מעשה טוב יכולים לשנות את חייהם של הנפגעים ולהחזיר להם תקווה ואמונה באנשים. בתקופות קשות אלו, אנו זקוקים לאחדות ולאהבה יותר מתמיד. כח האחדות ואהבת ישראל הוא זה שיעזור לנו לנצח את הקשיים ולהתגבר על כל מכשול. האתר נועד לתת מענה מהיר ויעיל לכל אלו שנמצאים במצוקה, ולהפוך את הדרך להתמודדות לקלה יותר.
                    </p>
                    <p>
                        לנפגעים ולמפונים, אנו שולחים את כל הכוח והתמיכה שבעולם. זכרו שאתם לא לבד, ואנו כאן כדי לעזור לכם בכל דרך שניתן. כל אחד ואחת מכם חשובים לנו, ואנו נעשה הכל כדי לסייע לכם להתאושש ולהתחזק. יחד, בכח האחדות ואהבת ישראל, ננצח ונביא את הגאולה.
                    </p>
                    <p>
                        למתנדבים היקרים, אנו רוצים להחמיא לכם מכל הלב. עבודתכם היא אור גדול בתקופה חשוכה זו. אתם הסיבה שהאתר הזה קיים והכוח המניע מאחוריו. אנו מודים לכם על כל רגע שאתם משקיעים, על כל עזרה ועל כל מעשה טוב. בזכותכם, העולם נראה טוב יותר ואנשים רבים מוצאים את הדרך לחיים חדשים וטובים יותר.
                    </p> */}
                </div>
            </>}
        </>
    )
}
export default Home;