import React from "react";
import './styles/App.css';
import Translator from "./API/Translator";

function AppAlexandr() {

  return (
    <div className="AppAlexandr">
      <h1 style={{ textAlign: "center" }}>Homepage</h1>
      <hr style={{ margin: '10px 0' }} />
      <Translator/>
    </div>
  );
}

export default AppAlexandr;
