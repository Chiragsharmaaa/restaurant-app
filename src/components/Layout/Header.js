import React, { Fragment } from "react";
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}> //cant use dot notation if the class has a dash.
            <img src={mealsImg} alt='A table full of delicious food!' />
        </div>
    </Fragment>
};

export default Header;
