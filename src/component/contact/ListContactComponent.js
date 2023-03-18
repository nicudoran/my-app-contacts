import React, { Component } from 'react';
import { ContactService } from '../../service/ContactService';


export default class ListContactComponent extends Component {


  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      res:false
    };
    this.service=new ContactService();
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }




componentDidMount=async()=>{
  try{
  const response=await this.service.getAllContacts();
  if(response){
    this.setState({contacts:response.data})
  }
}
  catch(error){
    console.log(error.message);
  }
}


 async handleDelete(event,id) {
  event.preventDefault();
  console.log(id)


    try{
      const response=await this.service.deleteContact(id);
      if(response){
        console.log(response)
        this.setState({res:response.data});
        this.componentDidMount();
      }
    }
      catch(error){
        console.log(error.message);
      }
    return;

};

handleSearchChange(event) {
  event.preventDefault();
  //actualizare campuri din state

  let name = event.target.name;
  let value = event.target.value;

  if (name=== "searchValue") {
     this.setState({
      searchValue: value,
    });
  };

};


 async handleSearchClick(event) {
  
  event.preventDefault();
  if (!this.state.searchValue) {
    this.componentDidMount();
    return;
  }
  let name=this.state.searchValue;
  console.log(name);


    try{
      const response=await this.service.getContactByName(name);
      if(response){
        console.log(response.data.contacts);
        this.setState({contacts:response.data.contacts});
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
      <div className="h2">Contacts List:</div>
      <div className='m-2 d-block col-6'>
      <form className="d-flex">
        <input 
        className="form-control me-2" 
        onChange={this.handleSearchChange}
        type="search" 
        name="searchValue"
        placeholder="Search" 
        aria-label="Search"/>
        <button
        onClick={this.handleSearchClick}
        className="btn btn-outline-success" 
        type="submit"
        >Search</button>
      </form>
        </div>
      <ul className="list-group">
        {this.state.contacts.map((contact,index)=>(
        <li className="list-group-item mx-2" key={index}>{contact.firstName} {contact.lastName}: {contact.phoneNumber}
        <button className="btn btn-warning float-end" onClick={event => this.handleDelete(event, contact.id)} >Delete contact</button>
        </li>
      ))}
      </ul>
      </>
    )
  }
}
