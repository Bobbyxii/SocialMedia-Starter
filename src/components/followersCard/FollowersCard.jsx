import React from 'react'
import './FollowersCard.css'
import {Followers} from '../../Data/FollowersData'
import Button from '@mui/material/Button';

function FollowersCard() {
  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>
       {Followers.map((follower, id)=>{
        return(
            <div className="follower"> 
                <div>
                    <img src={follower.img} alt="" className='followerImage' />
                    <div className="name">
                        <span>{follower.name}</span>
                        <span>@{follower.username}</span>
                    </div>
                </div>
                <Button variant="contained" size="small">
                    Follow
                </Button>
            </div>
        )
       })}
    </div>
  )
}

export default FollowersCard