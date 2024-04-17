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

    const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }


    // const removeClasses = ()=>{
    //   document.body.classList.remove('bg-light');
    //   document.body.classList.remove('bg-dark');
    //   document.body.classList.remove('bg-success');
    //   document.body.classList.remove('bg-primary');
    //   document.body.classList.remove('bg-info');
    // }
    const toggleMode = (cls)=>{
      // removeClasses();
      if(cls==="light" || cls==="dark"){
        if(mode==="light"){
          setMode("dark")
          document.body.style.backgroundColor = "#0f0f0f";
          showAlert("Dark mode has been enabled successfully" , "success");
          // document.title = "TextUtils - Darkmode";
        }
        else{
          setMode("light")
          document.body.style.backgroundColor = "white";
          showAlert("Light mode has been enabled successfully" , "success");
          // document.title = "TextUtils - Lightmode";
        }
      }
      // else{
      //   document.body.classList.add('bg-'+cls);
      // }
    }

    // latest way of routing
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
                  <Alert alert={alert}/>
                  <div className="container my-3 "><TextArea heading="Try TextUtils - word count, lowercase to uppercase, uppercase to lowercase, inverse text, remove extra spaces" mode={mode} showAlert={showAlert}/></div></>,
      },
      {
        path: "/about",
        element: <><Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3 "> <About mode={mode}/> </div> </>,
      }
    ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
} 

export default App;
