import React from 'react'
import './InfoCard.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Button from '@mui/material/Button';

function InfoCard() {
    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Your Info</h4>
                <div><ModeEditIcon fontSize='small' /></div>

            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span> Married</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span> Alagbado</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span> Home</span>
            </div>
            <Button variant="contained" size="small">
                Logout
            </Button>
        </div>
    )
}

export default InfoCard