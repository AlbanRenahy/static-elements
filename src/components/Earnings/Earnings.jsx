import React from "react";
import global from "../../styles/BaseStyles.module.css";
import styles from "./Earnings.module.css"
import LineChart from "../LineChart/LineChart";

const Earnings = () => {
  return (
    <div className={`${global.card} ${styles.earningsCard} p-3 p-lg-4`}>
      <div className={"row no-gutters"}>
        {/* Left column */}
        <div className={"col-3"}>
          <p className={global.title}>GAINS</p>
          <p className={global.emphasis}>
          2878.90<span className={styles.currency}>€</span>
          </p>
          <p className={global.subtitle}>
            {" "}
            <span className={styles.delta}>+42</span> depuis la semaine dernière
          </p>
          <div className={global.chipBlue}>0.9087 ETH</div>
          <div className={`${global.chipOrange} mt-3`}>0.5 BTC</div>
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
