import React from 'react';

import Image from "../UI/Image/Image";
import classes from './Products.css';

const product = props => {

    return (
        <div>
            <p className={classes.Border}>
                <Image url={props.url} alt={props.alt} />
            </p>
            <p className={classes.Info}>
                {props.description}
                <br/>
                Price: &nbsp;{props.price}&nbsp;ILS
            </p>
        </div>
    );
};

export default product;