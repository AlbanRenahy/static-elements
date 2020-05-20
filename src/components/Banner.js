
import React from 'react'
import classes from '../styles/BaseStyles.module.css'

 const Banner = () => {
    return(

         <div className={`${classes.card} ${classes.banner}`}>
            <div class="row no-gutter align-items-center px-auto justify-content-around">
                <img src="assets/slack_icon.svg" alt=""/>

                 <div className="col-6">
                    <p className={classes.title} >Rejoignez la conversation sur Slack</p>
                    <p className={classes.subtitle}>Restez à jour sur les dernières nouvelles et les programmes spéciaux qui se déroulent uniquement sur la chaîne slack.</p>
                </div>

                 <button className={classes['button-outline']}>ME RAPPELER PLUS TARD</button>
                <button className={classes['button-solid']}>REJOINDRE MAINTENANT</button>
            </div>
        </div>
    )
}


 export default Banner; 