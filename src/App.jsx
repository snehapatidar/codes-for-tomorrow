import "./App.css";
import React from 'react'
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Loginsignup from "./Pages/Loginsignup";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Loginsignup/>}/>
      </Route>
    )
  )
  return (
    <>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </>
  );
}

export default App;
