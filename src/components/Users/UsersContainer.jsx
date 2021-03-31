import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC } from "../../Redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersCount: (usersCount) => {
            dispatch(setUsersCountAC(usersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)