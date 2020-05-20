import React from 'react';
import classes from '../styles/BaseStyles.module.css';

 const Rank = props => {
    return (
        <div className={`${classes.card} ${classes.rankCard}`}>
            <div className={"row no-gutters"}>
                <div className={"col mr-auto"}>
                    <h4>RANG</h4>
                    <div name="rank" class="mb-2"> <img src="assets/rank_icon.svg"/><span class="align-bottom">607</span> </div>
                    <p> Vous êtes dans le top <span> 40% </span></p>
                </div>
                <div className={"col"}>
                    <h4>PROJETS</h4>
                    <div name="rank" class="mb-2"> <img src="assets/projects_icon.svg"/><span class="align-bottom">607</span> </div>
                    <p><span> 10 </span> ce mois-ci </p>
                </div>
            </div>
            <hr className={classes.divider} />
            <h4>TOP CATEGORIES</h4>
            <div className={"row no-gutters justify-content-between"}>
                <div className={`${classes.chipGray} mr-2`}>
                    ruby
                </div>
                <div className={`${classes.chipGray} mr-2`}>
                    clojure
                </div>
                <div className={`${classes.chipGray} mr-2`}>
                    java
                </div>
            </div>
        </div>
    )
}

 export default Rank; 