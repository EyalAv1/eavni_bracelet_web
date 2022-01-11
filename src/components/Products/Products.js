import React from 'react';

import Image from "../UI/Image/Image";
import classes from './Products.css';

const product = props => {

    return (
        <div>
            <div className={classes.Border}>
                <Image url={props.url} alt={props.alt} />
            </div>
            <div className={classes.Info}>
                {props.description}
                <br/>
                Price: &nbsp;{props.price}&nbsp;ILS
            </div>
        </div>
    );
};

export default product;