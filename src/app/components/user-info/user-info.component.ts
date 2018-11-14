import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { User } from "../../models/userlogin";
import { UserService } from "../../servicios/user-service.service";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public user : User;
  public error : boolean;
  public errorDesc : String;

  constructor(config: NgbTabsetConfig, private router: Router,public http: HttpClient,private userService: UserService,protected localStorage: LocalStorage) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
  ngOnInit() {
    this.localStorage.getItem('user').subscribe((user) => {
      if ( user == null) {
        this.router.navigateByUrl('/');
      }else{
        this.user = new User(user);
        this.user.img = this.user.img ? this.user.img : '../../../assets/img/user.svg';
      }
    });
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
    this.userService.updateImage(file).subscribe(
      res => {
        this.user['img'] = "";
      },
      error => {
        console.error(error);

      },
      
    );
  }
}
