import React from 'react';
import Icon from './Icon/icon';
import classes from './Icons.module.css';
import Github from '../../assets/git.svg';
import Facebook from '../../assets/face.svg';
import Linkedin from '../../assets/lin.svg';

const icons = (props) => {
    return (
        <div className={classes.icons}>
            <figure>
                <Icon name={Github} nameW="Github" clicked={props.clicked} />
                <Icon name={Linkedin} nameW="Linkedin" clicked={props.clicked} />
                <Icon name={Facebook} nameW="Facebook" clicked={props.clicked} />
            </figure>
        </div>
    );
}

export default icons;