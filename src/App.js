import React, {useState} from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";
import Card2 from "./components/cards/Card2";
import "./App.css";


const App = () => {
  const [isVisible, setisVisible] = useState(false);

  const onMouseClick = () => {
    setisVisible(!isVisible)
  }
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {/* <Card/> */}
      <Card2 isVisible={isVisible} onMouseClick={onMouseClick}/>
    </div>
  )
}

export default App;