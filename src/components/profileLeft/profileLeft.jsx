import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import './profileLeft.css'

function ProfileLeft() {
    return (
        <div className="profileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft