import React from "react";
import classes from "../styles/BaseStyles.module.css";
import ListItem from "./ListItem";

const Earners = () => {
  return (
    <div className={`${classes.card} ${classes.earners}`}>
      <header>
        <p class="d-block">CLASSEMENT</p>
        <div className="float-right">
        </div>
      </header>

      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
      <ListItem />
      <hr className={classes.divider} />
    </div>
  );
};

export default Earners;
