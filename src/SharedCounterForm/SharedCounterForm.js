import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import './SharedCounterForm.css';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function NewWindow(props) {
    const [portalContainer, setPortalContainer] = useState(document.createElement("div"));

    useEffect(() => {
        const externalWindow = window.open(
            "",
            "",
            "width=600,height=400,left=200,top=200"
        );

        setPortalContainer(externalWindow.document.body)
    }, [])

    return ReactDOM.createPortal(props.children, portalContainer);
}

function SharedCounterForm() {
    const [openModal, setOpenModal] = useState(false);
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [counter])

    return (
        <div className="form-wrapper">
            <div className="form-title">Fill in your personal data</div>
            <div className="form-title">Counter: {counter}</div>
            <FormControl className="personal-data-form">
                <TextField
                    className="personal-data-form-input"
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <Button
                    className="personal-data-form-submit"
                    variant="contained"
                    onClick={() => setOpenModal(true)}>
                    Submit
                </Button>
            </FormControl>
            {openModal &&
                <NewWindow counter={counter}>
                    <div className="form-title">Counter in new window: {counter} for {name}</div>
                </NewWindow>
            }
        </div>
    );
}

export default SharedCounterForm;