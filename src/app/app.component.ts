import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails=[
    {email: 'bill@gates.com', importance: true, subject: 'New Windows', content: 'Windows XI will launch in year 2100'},
    {email: 'ada@lovelace.com', importance: true, subject: 'Programming', content: 'Enchantree of Numbers'},
    {email: 'john@carmac.com', importance: false, subject: 'Updated Algo', content: 'New algo for shadow volumes'},
    {email: 'gabe@newell.com', importance: false, subject: 'HL3', content: 'Just kiding'}
  ]
}
