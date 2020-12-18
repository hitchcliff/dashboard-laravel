import React from "react";
import "./styles/main.css";
import { Auth } from "./app/index";

function App() {
  return (
    <div className="flex h-full font-sans bg-gray-100 min-h-screen">
      <Auth />
    </div>
  );
}

export default App;
