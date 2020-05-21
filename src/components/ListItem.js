import React from "react";
import classes from "../styles/BaseStyles.module.css";

const ListItem = () => {
  return (
    <div className={`${classes.listItem}`}>
      <div className="row justify-content-start align-items-center no-gutters">
        <p className={`${classes.index}`}> 1.</p>
        <img class="ml-2" src="assets/avatar_mathew.svg" alt="" />
        <div class="col ml-3">
          <p className={`${classes.name}`}>Matthieu Dupont</p>
          <p className={`${classes.amount}`}>10938.34€</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
