import React from "react";

function loading() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className=" border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
    );
}

export default loading;
