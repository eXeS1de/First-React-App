import React from "react";
import css from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        alt="bg"
      />
      <div className={css.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
