import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Service";

export default function App(){
  return (
    <>
    <Navbar />
    <main className="px-40">

    <Routes>
   
   <Route path="/" element={<Home />}/>

    <Route path="/about" element={<About />}/>

    <Route path="/contact" element={<Contact />}/>

    <Route path="/service" element={<Service />}/>
    </Routes>
    </main>

    </>
  )
}