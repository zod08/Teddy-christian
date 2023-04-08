import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "react-bootstrap";


class Header extends Component{
    render(){
        return(
            <div>

                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
    
                    <NavLink class="navbar-brand"  to="/">Teddy Christian</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul class="navbar-nav">

                        <li class="nav-item">

                        <NavLink class="nav-link "  to="/">Home</NavLink>
                        
                        </li>
                        <li class="nav-item">

                        <NavLink class="nav-link "  to="/">Projects</NavLink>
                        
                        </li>
                        <li class="nav-item">

                        <NavLink class="nav-link "  to="/">Contact</NavLink>
                        
                        </li>
                        
                         
                    </ul>

                    </div>
                </div>
                </nav>


            </div>
        )
    }
}

export default Header;