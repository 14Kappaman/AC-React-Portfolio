import logo from './logo.svg';
import './App.css';
import { Footer } from './footer';
import {Navigation} from "./navigation";
import { Header } from './header';
import { Project } from './project';
import { Routes, Route, Router, BrowserRouter } from "react-router-dom"
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Resume } from './pages/resume';
import { Work } from './pages/work';

function App() {
  return ( 
    <div>
       
    <Navigation/>

    <section className="hero"></section>

    <main className="main-wrapper"> 
        <base target='Home'></base>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About/>}></Route>
                <Route path="contact" element={<Contact/>}></Route>
                <Route path="resume" element={<Resume/>}></Route>
                <Route path="work" element={<Work/>}></Route>
            </Routes>
        </BrowserRouter>
    </main>

    <Footer/>

    </div>
  );
}

export default App;
