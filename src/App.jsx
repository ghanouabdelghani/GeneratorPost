import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Container from "./container/container";
import Post from "./poststyle/Post";

function App() {
  const toneOfVoice = [
    "polite",
    "funny",
    "informal",
    "serious",
    "optimistic",
    "motivational",
  ];

  const postStyle = ["Work", "Opinion", "Case study", "Story", "Tutorial"];
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    // setText(tone);
    setIsActive(!isActive);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        padding: "16px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Generate Your Post</h1>
      <Container />
      <p>Tone of Voice</p>
      <div style={{ display: "flex", gap: "20px" }}>
        {toneOfVoice.map((tone, index) => (
          <Post
            key={index}
            tone={tone}
            isActive={isActive}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <p>Post Style</p>
        <div style={{ display: "flex", gap: "20px" }}>
          {postStyle.map((style, index) => (
            <Post key={index} tone={style} />
          ))}
        </div>
      </div>
      <button
        style={{
          background: "#45a049",
          border: "none",
          borderRadius: "4px",
          marginTop: "16px",
          padding: "10px",
          color: "white",
        }}
      >
        Generate Post
      </button>
    </div>
  );
}

export default App;
