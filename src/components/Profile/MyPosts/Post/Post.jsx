import React from 'react'
import css from './Post.module.css'

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src='https://i.pinimg.com/originals/b9/56/08/b95608e0516e8969c1a55dd7fdaadee4.jpg' alt='avatar'/>
                {props.message}
            <div>
                Like {props.likesCount}           
            </div>
        </div>
    )
}

export default Post

