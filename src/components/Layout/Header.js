import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Meals from "../Meals/Meals"

function Header(props){
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShowCartII={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="table of meals"></img>
        </div>
        
        
    </Fragment>
    );
};

export default Header;


