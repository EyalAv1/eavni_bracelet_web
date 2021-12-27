import React from 'react';
import classes from './Image.css';

const image = (props) => (
    <div>
        <img src={props.url} alt={props.alt} className={classes.Image}/>
    </div>
);

export default image;