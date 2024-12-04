import React from "react";
import "./Calculator.css";

const Button = (props) => {
    return (
        <button
            className="ButtonStyle"
            value={props.label}
            onClick={props.handleClick}
        >
            {props.label}
        </button>
    );
};

export default Button;