import React from 'react';
import { NavLink } from 'react-router-dom';
//import Aux from '../../hoc/Auxuliary/Auxuliary';
import Products from '../../components/Products/Products';
import useFirestore from '../../hooks/useFirebase';
import classes from './Shop.css';

const Shop = props => {
    const { docs } = useFirestore('images');
    return (
        <div className={classes.Body}>
            {docs && docs.map(doc => (
                <li key={doc.id} className={classes.Photo}>
                        <NavLink to="/orderPage" activeClassName={classes.active}>
                            <Products url={doc.url} alt={doc.id} description={doc.description} price={doc.price} />
                        </NavLink>
                </li>
            ))}
        </div>
    );
};

export default Shop;