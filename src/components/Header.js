import React, { Component } from 'react';

import {NavLink, Routes, Route} from "react-router-dom";
import Contact from './Header-content/Contact';

import "react-bootstrap";
import "../components/css/Header.css"
import Home from './Header-content/Home';

import Projects from './Header-content/Projects';

class Header extends Component{
    render(){
        return(
            <div>

                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    
                    <NavLink className="text" to="/"><span class="navbar-brand">Teddy Christian</span></NavLink>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul class="navbar-nav">

                        <li class="nav-item">

                        <NavLink className="text"  to="/"><span class="nav-link ">Home</span></NavLink>
                        
                        </li>
                        <li class="nav-item">

                        <NavLink className="text"  to="/projects"><span class="nav-link ">Projects</span></NavLink>
                        
                        </li>
                        <li class="nav-item">

                        <NavLink className="text"  to="/contact"><span class="nav-link ">Contact</span></NavLink>
                        
                        </li>
                        
                         
                    </ul>

                    </div>
                </div>
                </nav>


            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/projects' element={<Projects/>}/>
            </Routes>
            </div>
        )
    }
}

export default Header;