import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateProject from './pages/CreateProject';
import Models from './pages/Models';
import Textbook from './pages/Textbook';
import FAQ from './pages/FAQ';
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";




const App = () => {
    return (
    <Router>
        <NavigationBar/>
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/create-project" element={ <CreateProject/> }/>
            <Route path="/models" element={ <Models/> }/>
            <Route path="/textbook" element={ <Textbook/> }/>
            <Route path="/faq" element={ <FAQ/> }/>
        </Routes>
        <Footer/>
    </Router>
)
    ;
};

export default App;
