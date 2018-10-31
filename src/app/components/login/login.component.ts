import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from "../../servicios/user-service.service";
import { Router } from '@angular/router';

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
  
 

  public login(username: string, password: string, event: Event): void {
    this.submitted = true;
    this.error = null;
    const name = username;
    const pass = password;
    var params : any = {
      'name' : name,
      'pass' : pass
    }
    //var body = "name=" + name + "&pass=" + pass;
    if(params.name && params.pass){
      this.userService.login(params).subscribe(
        res => {
          this.error = false;
          let u: any = {username: username};        
          //this.userService.setUserLoggedIn(u);
  
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
