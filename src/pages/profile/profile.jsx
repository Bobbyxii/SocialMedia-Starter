import React from 'react'
import './profile.css'
import ProfileLeft from '../../components/profileLeft/profileLeft'
import RightSide from '../../components/RightSide/RightSide'
import ProfileCard from '../../components/profileCard/ProfileCard'
import PostSide from '../../components/postSide/PostSide'

function Profile() {
    return (
        <div className="profile">
            <ProfileLeft />
            <div className="centerProfile">
                <ProfileCard />
                <PostSide />
            </div>
            <RightSide />
        </div>
    )
}

export default Profile