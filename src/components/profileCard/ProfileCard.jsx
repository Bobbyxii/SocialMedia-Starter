import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImgs.jpg'
import './ProfileCard.css'


function ProfileCard() {

    const ProfilePage = true;

    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>Bobby Essien</span>
                <span>Tech Wannabe</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>3900</span>
                        <span>Followers</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>340</span>
                        <span>Following</span>
                    </div>
                    {ProfilePage && (
                        <>
                            <div className="vl">

                            </div>
                            <div className="follow">
                                <span>4</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {ProfilePage ? "" :
                <span>
                    My Profile
                </span>}
        </div>
    )
}

export default ProfileCard