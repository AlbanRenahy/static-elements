import React from "react";
import globals from "../../styles/BaseStyles.module.css";

const Rank = (props) => {
  return (
    <div className={`${globals.card} ${globals.rankCard} p-3 p-md-4`}>
      <div className={"row no-gutters"}>
        <div className={"col mr-auto"}>
          <p className={`${globals.title}`}>RANG</p>
          
          <div className="row no-gutters justify-content-start align-items-center mt-3">
            <img src="assets/rank_icon.svg" />
            <p className={`${globals.emphasis} ml-2`}> 607</p>
          </div>
          <p className={globals.subtitle}>
          Vous êtes dans le top <span> 40% </span>
          </p>
        </div>

        <div className={"col"}>
          <p className={`${globals.title}`}>PROJETS</p>
          <div className="row no-gutters justify-content-start align-items-center mt-3">
            <img src="assets/projects_icon.svg" />
            <p className={`${globals.emphasis} ml-2`}> 45</p>
          </div>
          <p className={`${globals.subtitle}`}>
            <span> 10 </span> ce mois-ci{" "}
          </p>
        </div>
      </div>

      <hr className={globals.divider} />

      <p className={`${globals.title}`}>TOP CATEGORIES</p>
      <div className={"row no-gutters mt-3"}>
        <div className={`${globals.chipGray} mr-2`}>ruby</div>
        <div className={`${globals.chipGray} mr-2`}>clojure</div>
        <div className={`${globals.chipGray} mr-2`}>java</div>
      </div>
    </div>
  );
};

export default Rank;