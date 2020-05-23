import React from "react";
import classes from "../styles/BaseStyles.module.css";
import LineChart from "./LineChart";

const Earnings = () => {
  return (
    <div className={`${classes.card} ${classes.earningsCard} p-3 p-lg-4`}>
      <div className={"row no-gutters"}>
        {/* Left column */}
        <div className={"col-3"}>
          <p className={classes.title}>GAINS</p>
          <p className={classes.amount}>
          2878.90<span className={classes.amount}>€</span>
          </p>
          <p className={classes.delta}>
            {" "}
            <span className={classes.delta}>+42</span> depuis la semaine dernière
          </p>
          <div className={classes.chipBlue}>0.9087 ETH</div>
          <div className={`${classes.chipOrange} mt-3`}>0.5 BTC</div>
        </div>

        {/* Right column */}
        <div className={"col-9"}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
