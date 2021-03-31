import axios from "axios";
import React from "react";
import css from './Users.module.css'
import userPhoto from '../../assets/images/user-png-image.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(resp => {
            console.log(resp)
            this.props.setUsers(resp.data.items)
            this.props.setUsersCount(resp.data.totalCount)
        })
    }
    
    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(resp => {
            this.props.setUsers(resp.data.items)
        })
    }
    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map( p => {
                       return <span className={this.props.currentPage === p && css.selectedPage}
                            onClick={ () => { this.onPageChange(p) } }>{p}</span>
                    })}
                </div>
               { 
                    this.props.users.map( u => 
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img alt='avatar' src={u.photos.small != null ? u.photos.small : userPhoto } className={css.userPhoto} />
                                </div>
                                <div>
                                    { u.followed 
                                    ? <button onClick= { () => {this.props.unfollow(u.id)} }>Unfollow</button> 
                                    : <button onClick= { () => {this.props.follow(u.id)} }>Follow</button>
                                }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
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
}

export default Users