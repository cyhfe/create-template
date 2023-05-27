import * as React from "react";
import { createRoot } from "react-dom/client";
import img from "./assets/img.png";
import A from "./components/A";
import B from "./components/B";
import "./style.css";

function App() {
  const a = 1;
  return (
    <div>
      app
      <img
        src={img}
        alt=""
        style={{
          width: "100px",
        }}
      />
      <A />
      <B />
    </div>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
