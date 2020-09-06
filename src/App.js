import React from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Note />
      </div>
    </div>
  );
}

export default App;
