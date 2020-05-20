import React from "react";
import classes from "../styles/BaseStyles.module.css";

const Banner = () => {
  return (
    <div className={`${classes.card} ${classes.banner}`}>
      <div class="row no-gutters align-items-center justify-content-around">
        <div className="text-center my-3">
          <img src="assets/slack_icon.svg" alt="" />
        </div>
        <div className="col-lg-6 col-md-12 my-3 text-lg-left text-center">
          <p className={classes.title}>Rejoignez la conversation sur Slack</p>
          <p className={classes.subtitle}>
            Restez à jour sur les dernières nouvelles et les programmes spéciaux
            qui se déroulent uniquement sur la chaîne slack.
          </p>
        </div>

        <div className="row no-gutters justify-content-md-around justify-content-sm-between">
          <div className="col-sm-12 col-md-auto">
            <button className={`${classes["button-outline"]}`}>
              ME RAPPELER PLUS TARD
            </button>
          </div>
          <div className="col-sm-12 col-md-auto">
            <button className={`${classes["button-solid"]}`}>REJOINDRE MAINTENANT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
