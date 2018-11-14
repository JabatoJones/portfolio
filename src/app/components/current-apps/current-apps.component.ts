import { Component, OnInit } from '@angular/core';
import { User } from '../../models/userlogin';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'current-apps',
  templateUrl: './current-apps.component.html',
  styleUrls: ['./current-apps.component.css']
})
export class CurrentAppsComponent implements OnInit {

  private user : User;

  constructor(protected localStorage: LocalStorage,private router: Router) { }

  ngOnInit() {
    this.getApps();
    
  }
  
  getApps(){
    let vm = this;
    this.localStorage.getItem('user').subscribe((user) => {
      if ( user == null) {
        this.router.navigateByUrl('/');
      }else{
        vm.user = new User(user);
      }
    });
  }
  

}

