import React, { Component } from 'react';
import "../css/Home.css";
import html from "../assets/html-5.png"; 
import css from "../assets/css-3.png"; 
import js from "../assets/js.png";
import php from "../assets/php.png"; 
import mysql from "../assets/mysql.png"; 
import c from "../assets/c-.png"; 
import java from "../assets/java.png"; 
import python from "../assets/python.png";
import illustrator from "../assets/illustrator.png"; 
import indesign from "../assets/indesign.png"; 
import photoshop from "../assets/photoshop.png";  

 

class Home extends Component {
    state = {  } 
    render() { 
        return (
         
                            <div className="container-body">

                                <div className='content-first'>
                                    <div className='content-perso'>
                                            <div>
                                                <p className="content-p">I'm</p>
                                            </div>
                                            <div>
                                                <h1 className="content-h1">Teddy Christian</h1>
                                            
                                            </div>
                                            <div>
                                                <p className="content-p">"A web Designer and a Simplicity lover"</p>
                                            </div>

                                    </div>
                                    {/* <div className='content-image'>
                                        <img src={teddy} alt="teddy" />
                                    </div> */}
                                    
                                </div>


                            <div className='big-section-container'>
                            <div className='content-section'>
                                    <div class="col-md-12">
                                        <article>
                                            <h3 class="colorify">Hello / Hallo / Salut</h3>
                                            
                                            
                                            <p   class="textify">I'm a self-learner and developer originally from Madagascar, but currently in Germany. I have a passion for designing and creating beautiful, user-friendly websites and love to learn by myself</p>
                                        
                                        </article>
                                            
                                    </div>
                                </div>

                                <h1 className='sep'>Skills And Knowledge.</h1>

                                <div className='links content-section'>
                                    <div class="col-md-12">
                                        <article>
                                            <h3 class="colorify">Programming languages</h3>
                                            
                                            
                                             
                                            <p className="centered-text">During my studies in IT and Design, as well as through many online courses, I had the opportunity to familiarize myself with several programming languages and master them.</p>
                                            <div className='box-image'>
                                                <img class="img-icon-skills" src={html} title="java icons"/>
                                                <img class="img-icon-skills" src={css} title="java icons"/>
                                                <img class="img-icon-skills" src={js} title="java icons"/>
                                                <img class="img-icon-skills" src={php} title="java icons"/>
                                                <img class="img-icon-skills" src={mysql} title="java icons"/>
                                                <img class="img-icon-skills" src={c} title="java icons"/>
                                                <img class="img-icon-skills" src={java} title="java icons"/>
                                                <img class="img-icon-skills" src={python} title="java icons"/>
                                            </div>
                                            
                                        </article>
                                            
                                    </div>
                                </div>

                                 <div className='rechts content-section'>
                                    <div class="col-md-12">
                                        <article>
                                        <h3 class="colorify">Other skills</h3>
                                            
                                            
                                             
                                            <p className="centered-text">I'm also familiar with the world of design and 3D modeling, as I've taken several courses and completed projects in these field</p>
                                            <div className='box-image'>
                                                <img class="img-icon-skills" src={photoshop} title="java icons"/>
                                                <img class="img-icon-skills" src={indesign} title="java icons"/>
                                                <img class="img-icon-skills" src={illustrator} title="java icons"/>
                                                 
                                            </div>

                                        </article>
                                            
                                    </div>
                                </div>
                                <div className='rechts content-section'>
                                    <div class="col-md-12">
                                        <article>
                                        <h1 class="colorify">Curious...?</h1>
                                            
                                        <h3>I&rsquo;m currently available in Germany.</h3>
                                             
                                            <p className="centered-text">Don't hesitate to reach out if you have a project in mind or if you just want to say hello and be friend. I'm here to help and would be happy to hear from you.</p>
                                             


                                            <p class="btn-hldr">
                                             
                                                
                                            <a href="mailto:christianteddy90@gmail.com" class=" mail ">contact me</a>
                                                
                                            </p>

                                        </article>
                                            
                                    </div>
                                </div>
                            </div>
                                  
                                
                        </div>
                     
        );
    }
}
 
export default Home;