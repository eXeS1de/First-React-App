import React from "react";
import css from './Users.module.css'
import userPhoto from '../../assets/images/user-png-image.png'
import { NavLink, Redirect } from "react-router-dom";


const Users = (props) => {
    
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        
        if (!props.isAuth) return <Redirect to={'/login'} />

        return (
            <div>
                <div className={css.pagination}>
                    {pages.map( p => {
                       return <span className={props.currentPage === p && css.selectedPage}
                            onClick={ () => { props.onPageChange(p) } }>{p}</span>
                    })}
                </div>
               { 
                    props.users.map( u => 
                        <div key={u.id} className={css.userBlock}>
                            <span>
                                <div className={css.name}>{u.name}</div>
                                <div className={css.users}>
                                    <NavLink to={'profile/' + u.id}>
                                        <img alt='avatar' src={ u.photos.small != null ? u.photos.small : userPhoto } className={css.userPhoto} />
                                    </NavLink>
                                </div>
                                <div className={css.subscribe}>
                                    { u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick= { () => {props.unfollowThunkCreator(u.id)} }>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick= { () => {props.followThunkCreator(u.id)} }>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.status}</div>
                                </span>
                                {/* <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span> */}
                            </span>
                        </div>
                    )
                }
            </div>
        )
}

export default Users