import React from "react";
import Preloader from "../../Preloader/Preloader";
import css from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={css.avatar}>
        <img src={props.profile.photos.large} alt='profile' />
        <div>{props.profile.aboutMe}</div>
      </div>
      <div className={css.description}>
        <ProfileStatus {...props} />
      </div>
    </div>
  );
};

export default ProfileInfo;
