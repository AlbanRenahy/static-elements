import React from "react";
import classes from "../styles/BaseStyles.module.css";
import ListItem from "./ListItem";
import { Items } from "./data";

const Earners = () => {
  return (
    <div className={`${classes.card} ${classes.earners} p-3 p-lg-4`}>
      <header>
        <div className="row justify-content-between align-items-center no-gutters pb-4">
          <p className={classes.title}>CLASSEMENT</p>
          <div>
            <a className={`${classes.thisMonth} mr-2`} href="#">
              Ce mois
            </a>
            <a className={classes.allTime} href="#">
              Voir tout
            </a>
          </div>
        </div>
      </header>
  
      {Items.map((item,index) => (
        <div>
            <ListItem index={index} {...item}/>
            {index < Items.length-1? <hr className={classes.divider} /> : null}
        </div>
      ))}
    </div>
  );
};

export default Earners;
