import React, { Component } from 'react';
import { ContactService } from '../../service/ContactService';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";



export default class AddContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      res:false,
      searchValue: ""
    };
    this.service=new ContactService()
    
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

  };

  handleChange(event) {
    event.preventDefault();
    //actualizare campuri din state

    let name = event.target.name;
    let value = event.target.value;

    if (name=== "firstName") {
       this.setState({
        firstName: value,
      });
    };

    if (name === "lastName") {
      this.setState({
        lastName: value,
      });
    };
    if (name === "phoneNumber") {
      this.setState({
        phoneNumber: value,
      });
    };
  };


   async handleClick(event) {
    
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName||!this.state.phoneNumber) {
      alert(`All fields are required`);
      return ;
    }
    let data={
      "firstName":this.state.firstName,
      "lastName":this.state.lastName,
      "phoneNumber":this.state.phoneNumber,
    };
    console.log(data)
  

      try{
        const response=await this.service.addContact(data);
        if(response){
          console.log(response);
          this.setState({res:response.data});
          }
      }
        catch(error){
          console.log(error.message);
        }
      return;
    };



  render() {
    return (
<>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
         onChange={this.handleChange}
         type="text"
         name="firstName"
         id="firstName"
        //  placeholder="First Name" 
         required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control      
        onChange={this.handleChange}
         type="text"
         name="lastName"
         id="lastName"
        //  placeholder="Last Name" 
         required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
             onChange={this.handleChange}
             type="number"
             name="phoneNumber"
             id="phoneNumber"
            //  placeholder="Phone Number" 
             required/>
      </Form.Group>
      <button className='btn btn-primary' onClick={this.handleClick}>Add contact</button>
      {this.state.res&&<Navigate to="/contacts"/>}
    </>    )
  }
}
