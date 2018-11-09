import { Component, OnInit } from '@angular/core';
import { User } from '../../models/userlogin';

@Component({
  selector: 'current-apps',
  templateUrl: './current-apps.component.html',
  styleUrls: ['./current-apps.component.css']
})
export class CurrentAppsComponent implements OnInit {

  private user : User;

  constructor() { }

  ngOnInit() {
    this.getApps();
  }
  
  getApps(){
    let vm = this;
    vm.user = new User(JSON.parse(sessionStorage.getItem('user')));
  }

}

