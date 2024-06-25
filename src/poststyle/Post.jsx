import React, { useState } from "react";

export default function Post({ tone, isActive, handleClick }) {



  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        width: "85px",
        padding: "10px",
        cursor: "pointer",
        backgroundColor: isActive ? "red" : "white",
      }}
      onClick={handleClick}
    >
      <p>{tone}</p>
    </div>
  );
}
