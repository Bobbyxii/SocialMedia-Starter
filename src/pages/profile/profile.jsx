import React from 'react'
import './profile.css'
import ProfileLeft from '../../components/profileLeft/profileLeft'
import RightSide from '../../components/RightSide/RightSide'
import ProfileCard from '../../components/profileCard/ProfileCard'

function Profile() {
    return (
        <div className="profile">
            <ProfileLeft />
            <ProfileCard />
            <RightSide />
        </div>
    )
}

export default Profile