import React from 'react';
import { NavLink } from 'react-router-dom';
//import Aux from '../../hoc/Auxuliary/Auxuliary';
import Products from '../../components/Products/Products';
import useFirestore from '../../hooks/useFirebase';
import classes from './Shop.css';

const Shop = props => {
    const { docs } = useFirestore('images');
    //var desc = '';
    return (
        <div className={classes.Body}>
            {docs && docs.map(doc => (
                <div key={doc.id} className={classes.Photo}>
                         <NavLink to={"/shop/orderPage/" + doc.imgName}>
                            <Products url={doc.url} alt={doc.id} description={doc.description.substring(0,20) + "..."} price={doc.price} />
                            {/* <Products url={doc.url} alt={doc.id} description={desc} price={doc.price} /> */}
                        </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Shop;