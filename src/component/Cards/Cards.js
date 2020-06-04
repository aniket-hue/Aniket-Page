import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/Card'
const cards = (props) => {
    return (
        <div className={classes.wrap}>

            <Card
                title='Burger Builder App'
                body='A Burger building online multipage app. Built on React JS.'
                link='https://github.com/aniket-hue/Burger-App-React'
            />

            <Card
                title='Covid 19 Statistics'
                body='A covid 19 statistics app which shows number of infected, deaths, and recovered. 
                Built with React JS, Chart JS.'
                link='https://github.com/aniket-hue/Covid19-stats-React'
            />

            <Card
                title='Blog'
                body='A simple blog which features creation, updation and deletion of posts. And 
                you can also make your own profile 
                Built with Django.'
                link = 'https://github.com/aniket-hue/Django---Blog'
            />

            <Card title='Markdown Editor'
                body='A simple markdown editor. Built with React.'
                link='https://github.com/aniket-hue/MarkDown-editor'/>

        </div>
    );
}

export default cards;