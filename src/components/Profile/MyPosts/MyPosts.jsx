import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Post
            </div>
            <div className={css.post}>
                <Post message='Hi' likes='15'/>
                <Post message='How are u' likes='35'/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts

