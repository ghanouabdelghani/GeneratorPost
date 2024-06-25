import React from "react";
import facebook from "../assetes/facebook.svg";
import linkedin from "../assetes/linkedin.svg";
import reddit from "../assetes/reddit.svg";
import twitter from "../assetes/twitter.svg";

export default function Container() {
  return (
    <div>
      <div>
        <p>Social Platform</p>
        <div style={{ display: "flex", gap: "30px" }}>
          <img src={facebook} alt="Facebook" />
          <img src={linkedin} alt="LinkedIn" />
          <img src={reddit} alt="Reddit" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
      <div>
        <p>Your Message</p>
        <textarea
          style={{ height: "100px", width: "100%" }}
          placeholder="e.g. How to escape tutorial hell"
        ></textarea>
      </div>
    </div>
  );
}
