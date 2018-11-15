import { Component, OnInit } from '@angular/core';
import { UserService } from "../../servicios/user-service.service";
import { Router } from '@angular/router';
import { User } from "../../models/userlogin";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,protected localStorage: LocalStorage,private formBuilder: FormBuilder) { }

  public submitted :boolean;
  public error:boolean;
  public errorDesc:string;
  form: FormGroup;
  controls;

  orders = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'PHP' },
    { id: 3, name: 'Visual Basic' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'Angular JS' },
    { id: 6, name: 'Java' },
    { id: 7, name: 'Python' },
    { id: 8, name: 'C' },
    { id: 9, name: 'C++' },
    { id: 10, name: 'Ruby' },
    { id: 11, name: 'Shell' },
    { id: 12, name: '.NET' }
  ];
  


  ngOnInit() {
    let vm = this;
  // Create a new array with a form control for each order
    vm.controls = this.orders.map(c => new FormControl(false));
    vm.controls[0].setValue(true); // Set the first checkbox to true (checked)

    this.form = this.formBuilder.group({
      orders: new FormArray(vm.controls)
    });
  }

  submit() {
    
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
          if(res.error){
            this.error = true;
            this.errorDesc = "El correo introducido ya esta siendo usado";
          }else{
            this.error = false;
            var user = new User(res.user);
            this.localStorage.setItem('user', user).subscribe(() => {}, () => {});
            //sessionStorage.setItem('user',JSON.stringify(user));
            console.log(user);
            this.navigate();
          }          
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
