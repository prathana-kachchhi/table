// import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [num, setnum] = useState(1);
  // let nums = 10
  console.log("data", num);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
