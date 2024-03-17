// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

    const [mode, setMode] = useState("light");

    const [alert, setAlert] = useState(null);

    // const [theme, setTheme] = useState(null);

    const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

    const toggleMode = ()=>{
      if(mode==="light"){
        setMode("dark")
        document.body.style.backgroundColor = "#0f0f0f";
        showAlert("Dark mode has been enabled successfully" , "success");
        document.title = "TextUtils - Darkmode";
      }
      else{
        setMode("light")
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled successfully" , "success");
        document.title = "TextUtils - Lightmode";
      }
    }

    // const applyTheme = (color)=>{
    //   // setTheme(color);
    //   // setMode("dark");
    //   document.body.style.backgroundColor = color;
    // }

    // latest way of routing
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
                  <Alert alert={alert}/>
                  <div className="container my-3 "><TextArea heading="Enter text to be Analysed" mode={mode} showAlert={showAlert}/></div></>,
      },
      {
        path: "/about",
        element: <><Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3 "> <About /> </div> </>,
      }
    ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
} 

export default App;
