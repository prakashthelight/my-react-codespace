import React from "react";

const Logo = (props) => {
    return (
        <div className="logo">
            {props.title}
            <span></span>
        </div>
    );
}

export default Logo;