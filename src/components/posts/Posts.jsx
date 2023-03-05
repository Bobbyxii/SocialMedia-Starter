import React from 'react'
import './Posts.css'
import { PostData } from '../../Data/PostData'
import Post from '../post/Post'


function Posts() {
    return (
        <div className="Posts">
            {PostData.map((post, id) => {
                return <Post key={id} data={post} id={id} />
            })}
        </div>
    )
}

export default Posts