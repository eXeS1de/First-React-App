import React from "react";
import Preloader from "../../Preloader/Preloader";
import css from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <img
        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        alt="bg"
      />
      <div className={css.avatar}>
        <img src={props.profile.photos.large} alt='profile' />
      </div>
      <div className={css.description}>{props.profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
