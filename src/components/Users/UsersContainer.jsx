import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { setCurrentPage, setUsers, setUsersCount, toggleIsFetching, unfollow, toggleIsFollowingProgress, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator } from "../../Redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
        
    onPageChange = (page) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)

        usersAPI.getUsers(page,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }   

    render() {
        return  <>
            { this.props.isFetching 
            ? <Preloader />
            : <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        toggleIsFetchingAC={this.props.isFetching}
                        onPageChange={this.onPageChange}
                        followingInProgress={this.props.followingInProgress}
                        unfollowThunkCreator={this.props.unfollowThunkCreator}
                        followThunkCreator={this.props.followThunkCreator}
                        getUsersThunkCreator={this.props.getUsersThunkCreator}
                        /> }
                </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, { unfollow, setUsers,
    setCurrentPage, setUsersCount, toggleIsFetching, toggleIsFollowingProgress, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator}) (UsersContainer)