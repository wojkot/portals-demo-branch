import React from 'react';
import './WarningModal.css';
import Button from '@mui/material/Button';

function WarningModal({ message, onClose }) {
    return <div className="modal-wrapper">
        <div className="modal">
            <h2>WARNING</h2>
            <p>{message}</p>
            <Button variant="contained" onClick={onClose}>OK</Button>
        </div>
    </div>
}

export default WarningModal;