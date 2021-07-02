import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post'
import { Form, Field } from "react-final-form"
import { composeValidators, maxLength, required } from '../../../utils/validators/validators'
import { Textarea } from '../../сommon/FormControls/FormControls'

const maxLength10 = maxLength(10)

const MyPostsForm = (props) => {
    return (
        <Form onSubmit={values => {props.addPost(values.newPostText)}}>
        {({ handleSubmit, pristine, form, submitting }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="newPostText" component={Textarea} placeholder="Type your post" validate={composeValidators(required,maxLength10)} />
                    <button type="submit">Add Post</button>
                </div>
            </form>
        )}
        </Form>
    )
}

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let addPost = (newPostText) => {
        props.addPost(newPostText);
    }

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <MyPostsForm addPost={addPost} />
            <div className={css.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts

