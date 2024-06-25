import React from "react";

export default function Tone({ post }) {
  return (
    <div>
      <p
        style={{
          border: "1px solid red",
          borderRadius: "5px",
        }}
      >
        {post}
      </p>
    </div>
  );
}
