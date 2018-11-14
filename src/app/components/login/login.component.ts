import { Component, OnInit } from '@angular/core';
import { UserService } from "../../servicios/user-service.service";
import { Router } from '@angular/router';
import { User } from "../../models/userlogin";
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,protected localStorage: LocalStorage) { }

  public submitted :boolean;
  public error:boolean;
  public errorDesc:string;

  ngOnInit() {
    this.localStorage.getItem('user').subscribe((user) => {
      if( user) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  } 
 

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
          if(res.error){
            this.error = true;
            this.errorDesc = res.error;
            this.router.navigateByUrl('/');
          }else{
            this.error = false;
            var user = new User(res.user);
            let userString = JSON.stringify(user);
            this.localStorage.setItem('user', user).subscribe(() => {}, () => {});
            //sessionStorage.setItem('user',JSON.stringify(user));
            console.log(user);  
            this.navigate();
          }          
        },
        error => {
          console.error(error);
  
        }        
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
