import React from 'react';
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
//import Aux from '../../hoc/Auxuliary/Auxuliary';
import Products from '../../components/Products/Products';
import useFirestore from '../../hooks/useFirebase';
import classes from './Shop.css';

const Shop = props => {
    const { docs } = useFirestore('images');
    return (
        <div>
            {docs && docs.map(doc => (
                <div key={doc.id} className={classes.Photo}>
                    {/* <NavigationItem link="/orderPage"> */}
                        <NavLink to="/orderPage" activeClassName={classes.active}>
                        <Products url={doc.url} alt={doc.id} description={doc.description} price={doc.price} />
                        </NavLink>
                    {/* </NavigationItem> */}
                </div>
            ))}
        </div>
    );
};

export default Shop;