import React from "react";

export const FormBanner = (props) => {
    return (
        <div className="text-lg md:text-xl text-cyan-50 p-2 mb-2 text-center animate-bounce">
            {props.msg}
        </div>
    )
}