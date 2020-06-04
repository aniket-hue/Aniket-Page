import React from 'react';
import classes from './Links.module.css'
const links = (props) => {
    return (
        <div >
            <div className={classes.container}>
                <h1 onClick={() => props.projects()}>PROJECTS</h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h2>|</h2>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h1>SKILLS</h1>
            </div>
        </div>
    );
}

export default links