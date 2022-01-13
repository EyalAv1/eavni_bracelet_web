import React, {useContext} from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import AuthContext from '../../../store/auth-context';

const NavigationItems = (props) => {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = props.isAuthenticated;
    const isMng = authCtx.isMng;
    console.log("Navigation Items: " + props.isAuthenticated);
    return (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        { !props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem> } */}

        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/shop">Shop</NavigationItem>
        {!isLoggedIn && (<NavigationItem link="/auth">login/signup</NavigationItem>)}
        {isLoggedIn && (<NavigationItem link="/profile">Profile</NavigationItem>)}
        {isLoggedIn && isMng && (<NavigationItem link="/uploadImage">Upload Image</NavigationItem>)}
    </ul>
    );
};

export default NavigationItems;