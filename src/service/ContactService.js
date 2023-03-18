import axios from 'axios'


export class ContactService{

  CONTACT_API_URL = process.env.CONTACT_API_URL||'http://127.0.0.1:8080';

getAllContacts(){
  return axios.get(`${this.CONTACT_API_URL}/contact/getAll`);
  }

  addContact(data){
    return axios.post(`${this.CONTACT_API_URL}/contact/add`,data);
  }

  deleteContact(id){
    return axios.delete(`${this.CONTACT_API_URL}/contact/delete/${id}`);
  }

  getContactByName(name){
    return axios.get(`${this.CONTACT_API_URL}/contact/get/${name}`);
  }

}

