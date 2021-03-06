import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../Redux/profileReducer'
import { Redirect, withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />

    return (
      <Profile {...this.props} />
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer) 

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}) (WithUrlDataContainerComponent);
