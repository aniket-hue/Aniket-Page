import React from 'react';
import '../App.css';
const icon = (props) => {
    let link = '';
    if (props.nameW === 'Github')
        link = 'https://github.com/aniket-hue';
    else if (props.nameW === 'Facebook')
        link = 'https://www.facebook.com/aniket.saxena.54379/';
    else
        link = 'https://www.linkedin.com/in/aniket-saxena1998/';
    return (
        <a href={link} target="_blank">
            <img
                onMouseOver={() => props.clicked(props.nameW)}
                onMouseOut={() => props.clicked('Home')}
                src={props.name} alt="#" />
        </a>
    )
}

export default icon;