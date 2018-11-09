import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/userlogin';
import { UserService } from "../../servicios/user-service.service";

@Component({
  selector: 'app-add-new-app',
  templateUrl: './add-new-app.component.html',
  styleUrls: ['./add-new-app.component.css']
})
export class AddNewAppComponent implements OnInit {

  user : User;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  public addApp(name:String,desc: String,lenguaje: String, url: String,event:Event): void {

    this.user = new User(JSON.parse(sessionStorage.getItem('user')));
    if(!this.user.aplications){
      this.user.aplications = [{'name':name,'desc':desc,'lenguaje':lenguaje,'url':url}];
    }else{
      this.user.aplications.push({'name':name,'desc':desc,'lenguaje':lenguaje,'url':url})
    }    
  
    var params : any = {
      'name' : this.user.name,
      'pass' : this.user.pass,
      'surname' :this.user.surname,      
      'email' : this.user.email,
      'aplications' : this.user.aplications,
      'aptitudes' : this.user.aptitudes,      
      'logros' : this.user.logros,
      'img' : this.user.img
    }

      this.userService.updateUser(params).subscribe(
        res => {
          var user = new User(this.user);
          sessionStorage.setItem('user',JSON.stringify(user));
          console.log(user);
          this.router.navigateByUrl('/dashboard');
        },
        error => {
          console.error(error);
  
        },
        
      );

  }

}
