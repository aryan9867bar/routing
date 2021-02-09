import { Component, OnInit } from '@angular/core';
import { Person, Methods, Cash } from "./contact.interface";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, Methods {

  person:Person;
  richPerson:Cash;

  constructor() {
    this.person = {
      firstName:"John",
      lastName:"Doe",
      address:"USA",
      email:"sdfs@fake.com",
      fax:678,

    }

    this.richPerson = {
      firstName:"dfgdf",
      lastName:"dfgdfg",
      hasMoney:true,

    }

    console.log(typeof this.person)
   }

  ngOnInit(): void {
  }

  add() {

  }

  sub() {
    
  }

}
