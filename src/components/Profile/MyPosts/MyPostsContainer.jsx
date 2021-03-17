import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
            
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts 
                            updateNewPostText={onPostChange} 
                            addPost={addPost} 
                            posts={state.posts} 
                            newPostText={state.newPostText} />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer

