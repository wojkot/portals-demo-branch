import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './AddressDataForm.css';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import WarningModal from '../Modals/WarningModal/WarningModal'

function AddressDataForm() {
    const [openModal, setOpenModal] = useState(false);



    return (
        <div className="address-view">
            <div className="address-form-wrapper ">

                <div className="content">
                    {
                         openModal && <WarningModal message="Please fill all form fields" onClose={() => setOpenModal(false)}/>
                    }
                    <div className="form-title">Fill in your address data</div>
                    <FormControl className="address-data-form">
                        <TextField
                            className="address-data-form-input"
                            label="Postal Code"
                        />
                        <TextField
                            className="address-data-form-input"
                            label="Street"
                        />
                        <Button
                            className="address-data-form-submit"
                            variant="contained"
                            onClick={() => setOpenModal(true)}>
                            Submit
                        </Button>
                    </FormControl>
                    {/* {openModal &&
                                ReactDOM.createPortal(
                                    <WarningModal message="Please fill all form fields" onClose={() => setOpenModal(false)} />,
                                    document.getElementById('modal-root')
                                )
                    } */}

                </div>
            </div>

            <div className="other-form-wrapper">
                <Button variant="contained">Contact us</Button>
            </div>
        </div>
    );
}

export default AddressDataForm;