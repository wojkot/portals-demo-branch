import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './PersonalDataForm.css';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import WarningModal from '../Modals/WarningModal/WarningModal'

function PersonalDataForm() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="form-wrapper" onClick={()=> console.log('click')}>
            <div className="very">
                <div className="complicated">
                    <div className="nested">
                        <div className="content">
                            {/* {openModal &&
                                <WarningModal message="Please fill all form fields" onClose={() => setOpenModal(false)} />
                            } */}
                            <div className="form-title">Fill in your personal data</div>
                            <FormControl className="personal-data-form">
                                <TextField
                                    className="personal-data-form-input"
                                    label="Name"
                                />
                                <TextField
                                    className="personal-data-form-input"
                                    label="Surname"
                                />
                                <Button
                                    className="personal-data-form-submit"
                                    variant="contained"
                                    onClick={() => setOpenModal(true)}>
                                    Submit
                                </Button>
                            </FormControl>
                            {openModal &&
                                ReactDOM.createPortal(
                                    <WarningModal message="Please fill all form fields" onClose={() => setOpenModal(false)} />,
                                    document.getElementById('modal-root')
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalDataForm;