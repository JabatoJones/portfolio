import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { User } from "../../models/userlogin";
import { UserService } from "../../servicios/user-service.service";

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public user : User;
  public error : boolean;
  public errorDesc : String;

  constructor(config: NgbTabsetConfig, public http: HttpClient,private userService: UserService) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
  ngOnInit() {
    if(sessionStorage.getItem('user')){
      this.user = new User(JSON.parse(sessionStorage.getItem('user')));
    }else{
      this.error = true;
      this.errorDesc = "No existe usuario";
    }
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
