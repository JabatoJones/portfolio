import { Component, OnInit } from '@angular/core';
import { UserService } from "../../servicios/user-service.service";
import { Router } from '@angular/router';
import { User } from "../../models/userlogin";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,) { }

  public submitted :boolean;
  public error:boolean;
  public errorDesc:string;


  ngOnInit() {
  }

  public register(username:String,usersurname: String,email: String, pass: String, repass: String,apptitudes: String,regards: String ,event:Event): void {
    this.submitted = true;
    this.error = null;
  
    var params : any = {
      'name' : username,
      'pass' : pass,
      'surname' :usersurname,      
      'email' : email,
      'aplications' : null,
      'aptitudes' : apptitudes,      
      'logros' : regards,
      'img' : ''
    }

    if(pass != repass || !pass || !email ){
      this.error = true;
    }

    if(!this.error){
      this.userService.register(params).subscribe(
        res => {
          this.error = false;
          var user = new User(res.user);
          sessionStorage.setItem('user',JSON.stringify(user));
          console.log(user);
          this.navigate()
        },
        error => {
          console.error(error);
  
        },
        
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
