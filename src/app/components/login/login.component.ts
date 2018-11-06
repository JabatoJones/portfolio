import { Component, OnInit } from '@angular/core';
import { UserService } from "../../servicios/user-service.service";
import { Router } from '@angular/router';
import { User } from "../../models/userlogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,) { }

  public submitted :boolean;
  public error:boolean;
  public errorDesc:string;

  ngOnInit() {
  }

  /*login(datosAcceso){
    this.userService.login(datosAcceso);
  }*/
  
 

  public login(emailU: string, password: string, event: Event): void {
    this.submitted = true;
    this.error = null;
    const email = emailU;
    const pass = password;
    var params : any = {
      'email' : email,
      'pass' : pass
    }
    if(params.email && params.pass){
      this.userService.login(params).subscribe(
        res => {
          this.error = false;
          var user = new User(res);
          sessionStorage.setItem('user',JSON.stringify(user));
          console.log(user);  
        },
        error => {
          console.error(error);
  
        },
        () => this.navigate()
      );
    }else{
      if(!params.name || !params.pass) {
        this.error = true;
        this.errorDesc = "Debe rellenar los campos de manera correcta";
      }
    }

  }

  public registro(): void {
    this.router.navigateByUrl('/register');
  }

  navigate() {    
    this.router.navigateByUrl('/dashboard');
  }

  errors() {
    this.error = false;
  }
}
