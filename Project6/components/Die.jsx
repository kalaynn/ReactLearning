import React from "react";

export default function Die({id, value, held, toggleHeld }) {
    return (
        <button
            className={`h-10 w-10 rounded m-3 text-2xl text-center font-bold drop-shadow-md ${held ? "bg-green-300" : "bg-white"}`}
            onClick={() => toggleHeld(id)}
        >
            {value}
        </button>
    )
}
