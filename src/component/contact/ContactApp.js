import React, { Component } from 'react';
import ListContactComponent from './ListContactComponent';
import AddContactComponent from './AddContactComponent';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from '../Navbar';



export default class ContactApp extends Component {
  render() {
    return (
      <>
      <div className="container-fluid">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<ListContactComponent />} />;
        <Route path="/Contacts" element={<ListContactComponent />} />;
        <Route path="/add-contact" element={<AddContactComponent/>} />;
        </Routes>
      </Router>
 
      </div>
      </>
    )
  }
}
