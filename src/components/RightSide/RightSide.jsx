import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import SettingsIcon from '@mui/icons-material/Settings'
import TrendCard from '../TrendCard/TrendCard'
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';


function RightSide() {
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <SettingsIcon />
                <img src={Notification} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />
            <Button variant="contained" endIcon={<ShareIcon />}>Share </Button>

        </div>
    )
}

export default RightSide