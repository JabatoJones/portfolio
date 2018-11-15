import { Component, OnInit } from '@angular/core';
import { User } from "../../models/userlogin";
import { HttpClient } from '@angular/common/http';
import { UserService } from "../../servicios/user-service.service";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { ChecklistModule } from 'angular-checklist';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: User;

  options = [
    'JavaScript',
    'PHP',
    'Visual Basic',
    'Angular',
    'Angular JS',
    'Java',
    'Python',
    'C',
    'C++',
    'Ruby',
    'Shell',
    '.NET'
  ];

  list =[];


  constructor(private router: Router, public http: HttpClient, private userService: UserService, protected localStorage: LocalStorage) { }

  ngOnInit() {
    this.localStorage.getItem('user').subscribe((user) => {
      if (user == null) {
        this.router.navigateByUrl('/');
      } else {
        this.user = new User(user);
        this.user.img = this.user.img ? this.user.img : '../../../assets/img/user.svg';
      }
    });
  }

  editUser() {
    let vm = this;
    /*
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);
*/
    console.log(vm.list);
  }
}
