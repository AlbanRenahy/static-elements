import React from "react";
import classes from "../styles/BaseStyles.module.css";

const SuggestedProjectCard = () => {
  return (
    <div className={`${classes.card} ${classes.projectCard}`}>
      {/* Header */}
      <div className={"row no-gutters align-items-center"}>
        <img src="assets/avatar_one.svg" />
        <div className={"col my-auto"}>
          <p className={classes.avatarName}> Alice Martin</p>
          <p className={classes.avatarTime}> Il y a 5 heures</p>
        </div>
        <div className={`${classes.chipGray} col-auto`}>html</div>
      </div>

      {/* Content */}
      <p className={`${classes.content}`}>
      Concevoir et développer un site Web pour une plateforme éducative axée sur la croissance des enfants.
      </p>

      {/* Footer */}
      <hr className={classes.divider} />
      <div className={"row no-gutters align-items-center"}>
        <div className={classes.chipBlue}>1.2 ETH</div>
        <div className={`${classes.chipOrange} mr-auto`}>0.3 BTC</div>
        <h4 className={"my-auto"}>
          760<span>€</span>
        </h4>
      </div>
    </div>
  );
};

export default SuggestedProjectCard;
