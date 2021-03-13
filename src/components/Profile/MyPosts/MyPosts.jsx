import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';
import css from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={css.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts

