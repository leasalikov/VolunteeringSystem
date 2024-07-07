import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../App';
import Buttom from './Buttom';
import Logo from './Logo';
import Header from './Header';
import { Card } from 'primereact/card';

const ToNeedy = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [categoriesArray, setCategoriesArray] = useState([{ אוכל: false }, { אירוח: false }, { משחקים: false }, { בייביסיטר: false }]);
    const navigate = useNavigate();

    return (
        <div className="p-grid p-justify-center">
            <div className="p-col-12 p-md-8 p-lg-6">
                <Card className="p-card">
                    <Logo />
                    <Header />
                    <Buttom />
                    <div className="p-card-body">
                        <h2>בקשתך התקבלה, בקרוב ניצור איתך קשר</h2>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ToNeedy;
