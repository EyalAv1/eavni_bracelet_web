import React, { useState } from 'react';
// import { connect } from 'react-redux';

import Aux from '../Auxuliary/Auxuliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }
    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuth}
                drawToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuth}
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;