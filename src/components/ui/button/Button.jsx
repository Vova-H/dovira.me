import React from 'react';
import classes from "./button.module.css";

const Button = ({text, onClick, styles, ...props}) => {
    text = text ? text : "Button";
    onClick = onClick ? onClick : () => {
    }
    styles = styles ? styles : {}
    return (
        <button className={classes.button} onClick={onClick} style={{...styles}} {...props}>
            {text}
        </button>
    );
};

export default Button;
