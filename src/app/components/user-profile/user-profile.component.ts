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
  public error:boolean;
  public errorDesc:string;
  public succes:boolean;
  public succesDesc:String;
  
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

  editUser(name:String,surname:String,email:String,pass:String,repass:String,aptitudes:String,logros:String,$event:Event) {
    let vm = this;
    var params : any = {
      'name' : name ? name : this.user.name,
      'pass' : pass ? pass : this.user.pass,
      'surname' :surname ? surname : this.user.surname,      
      'email' : email ? email : this.user.email,
      'aplications' : this.user.aplications,
      'aptitudes' : aptitudes ? aptitudes : this.user.aptitudes,      
      'logros' : logros ? logros : this.user.logros,
      'img' : this.user.img,
      'skillPrograms' : this.list ? this.list : this.user.skillPrograms
    }

    this.userService.updateUser(params).subscribe(
      res => {
        if(res.error){
          this.error = true;
          this.succes = false;
          this.errorDesc = "Error al modificar el usuario";
        }else{
          this.error = false;
          this.succes = true;
          this.succesDesc = "Usuario modificado correctamente";
          this.user = new User(res.user);
          this.localStorage.setItem('user', this.user).subscribe(() => {}, () => {});
          console.log(this.user);
        }          
      },
      error => {
        console.error(error);  
      },      
    );
  }
}
