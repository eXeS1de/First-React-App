import React from 'react';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={css.content}>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
