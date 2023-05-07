import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>OrderYourMeal🍴</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        {/* we are using main-image in [] bcz in react if a class name is having - then we need to wrap it in [] */}
        <img src={mealsImage} alt="a table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
