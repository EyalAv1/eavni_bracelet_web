import React from 'react';

import img from '../../../assets/images/I01-1.JPG';
import classes from './Image.css';

const image = (props) => (
    <div>
        <img src={props.url} alt={props.alt} className={classes.Image}/>
    </div>
);

export default image;