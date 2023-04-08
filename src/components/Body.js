import React, { Component } from 'react';
import "react-bootstrap";
import "../components/css/Body.css";

class Body extends Component{

    constructor(props){
        super(props);
        this.state = {
            
                sender: "",
                reciever: "",
                object: "",
                message: "",
            
            

            error: false,
            send: 0
        }
    }

    handleChange = (event) => {
        let cible = event.target.name;
        // console.log(event.target.name);
        // this.setState({ cible : event.target.value});
        switch(cible){
            case "sender":
                
                this.setState({ sender : event.target.value});
                break;
            case "reciever":
                
                this.setState({ reciever : event.target.value});
                break;
            case "object":
                
                this.setState({ object : event.target.value});
                break;
            case "message":
                
                this.setState({ message : event.target.value});
                break;
            default:
                console.log("error");
                       
        }
         
    }

    turnOff = () => {
        this.setState({error : false});
    }
    turnOff2 = () => {
        this.setState({send : 0});
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.sender.trim() === "" || this.state.reciever.trim() === ""  || this.state.object.trim() === "" || this.state.message.trim()  === ""){

            this.setState({error:true});
        }else{
        
            //console.log(this.state);
            // send data to post request python

            fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({send : data.send})
                console.log(data.send)
            })
            .catch(error => console.error(error));
        }


       
    }

    


    render(){
        
        return(
            <div className='container-body'>

                    
            
                    <h1 className='titre'>E-mail Spoofer project</h1>

                    {
                        this.state.error &&
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        A field is missing !
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.turnOff}></button>
                        </div> 
                    }
                    
                
                    {
                        this.state.send === 2 && 
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Error by sending !
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.turnOff2}></button>
                        </div>
                    }
                    {
                        this.state.send === 1 &&
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                        Success !
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.turnOff2}></button>
                        </div>
                    }


                    <form class="row g-3">
                    <div class="col-12">
                        <label  for="inputAddress" class="form-label">E-mail Sender ( Try to use an email of a person that you know )</label>
                        <input required onChange={this.handleChange} name="sender" type="email" class="form-control" id="inputAddress" placeholder="example@gmail.com"/>
                    </div>
                    
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Empfänger-E-Mail-Adresse ( The person you want to send the email )</label>
                        <input required onChange={this.handleChange} name="reciever" type="email" class="form-control" id="inputAddress" placeholder="example@gmail.com"/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Betreff des E-Mails</label>
                        <input required onChange={this.handleChange} name="object" type="text" class="form-control" id="inputAddress2" placeholder="ex : Inportant Message de vérification"/>
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Naricht or Message ( What do you want to say )</span>
                        <textarea required onChange={this.handleChange} name="message" class="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <div class="d-grid gap-2">
                        <button onClick={this.handleClick} class="btn btn-danger">Send</button>
                    </div>
                    
                    </form>
                    
            </div>

             
        )
    }
}

export default Body;