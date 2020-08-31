import { Component, OnInit } from '@angular/core';
import {CONTACTS_INFO} from '../contacts-info';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  contactsInfo = CONTACTS_INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
