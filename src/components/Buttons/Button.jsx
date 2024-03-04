import React from "react";

function Button({ children, className }) {
    return (
        <button
            className={`btn h-10 bg-sky-600 hover:bg-sky-500 text-black rounded-full min-w-36 m-2 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
