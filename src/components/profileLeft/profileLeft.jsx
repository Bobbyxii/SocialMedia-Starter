import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import './profileLeft.css'

function ProfileLeft() {
    return (
        <div className="profileLeft">
            <LogoSearch />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft