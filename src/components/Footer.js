import React, { Component } from 'react';
import "react-bootstrap";
import "../components/css/Footer.css"


class Footer extends Component{
    render(){
        return(
            <div>

                <p class="text mt-5 mb-3 text-muted">React.js / Python / Flask / HTML / CSS / Bootstrap</p>
                <p class="text mt-5 mb-3 text-muted">&copy; Teddy Christian</p>

            </div>
        )
    }
}

export default Footer;