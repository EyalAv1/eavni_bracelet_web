import React from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Auxuliary/Auxuliary';
// import Products from '../../components/Products/Products';

const Layout = props => {
    return (
        <Aux>
            <Toolbar isAuth={props.isAuthenticated}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
        );
};

export default Layout;