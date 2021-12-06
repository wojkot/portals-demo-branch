import './Lamp.css';
import React, { useState } from "react";
import classNames from 'classnames'

// problems with readers
// different behaviour in forms
// different behaviour on pressing key and focuing

function Buttons() {

    const [glowing, setGlowing] = useState(false);

    return (
        <div className="light-switcher-wrapper">
            <div className={classNames('lamp', { 'glowing-lamp': glowing })}></div>
            <div className="buttons-wrapper">
                <div className="div-btn-info" onClick={() => setGlowing(!glowing)}>Switch light</div>
                <button className="btn-info" onClick={() => setGlowing(!glowing)}>Switch light</button>
            </div>
        </div>
    );
}

export default Buttons;
