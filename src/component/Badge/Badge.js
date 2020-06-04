import React from 'react';
import classes from './Badge.module.css'
const badge = (props) => {
    return (
        <div>
            <div className={classes.logo}>
                <div className={classes.text1}>
                    <h1>{props.name}</h1>
                </div>

            </div>
            <div className={classes.text}>
                <h1 className={classes.texth1}>I'm Aniket Saxena </h1>
                <p className={classes.p}>Developer | Sport Programmer | Reader</p>
            </div>
        </div>
    )
}
export default badge;