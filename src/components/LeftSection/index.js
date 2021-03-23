import React, { useState } from 'react';
// import BurgerButton from '../BurgerButton';
import './style.css';

const LeftSection = () => {
    const [status, setStatus] = useState('hide')

    return (
        <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${ status ? 'show' : 'hide' }`}>
            <div className="LeftSideBar__LeftSection__topWrapper">
                <button
                    onClick={() => setStatus(false)}
                />
            </div>
            <ul className="LeftSideBar__LeftSection__menuWrapper">
                <li>
                    <a
                        href="#"
                    >
            Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                    >
            Gallery
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                    >
            About
                    </a>
                </li>
            </ul>
            <button
                onClick={() => setStatus(false)}
            />
        </div>
    );
};

export default LeftSection;