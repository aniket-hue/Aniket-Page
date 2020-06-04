import React from 'react';
import classes from './Card.module.css'

const card = (props) => {
    console.log(props)
    return (

        <div className={classes.box}>
            <div className={classes.container}>
                <div className={classes.flex}>
                    <p className={classes.h1}>{props.title}</p>
                </div>
                <div className={classes.flex}>
                    <p className={classes.p}>{props.body} </p>
                </div>
                <div className={classes.flex}><a href={props.link} target="_blank " className={classes.a}>
                    <p className={classes.plink}>Code</p>
                </a>

                </div>
            </div>
        </div>

    );
}
export default card;