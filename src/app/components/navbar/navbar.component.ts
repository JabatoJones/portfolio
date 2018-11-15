import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TemplateSrvService } from '../../servicios/template-srv.service';
import { Subject } from "rxjs/Subject";
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private templateService: TemplateSrvService,private breakpointObserver: BreakpointObserver,private router: Router,protected localStorage: LocalStorage) {}

  setTemplate(templateNumber:string){
    this.templateService.setTemplate(templateNumber);
  }
  logout(){
    this.localStorage.removeItemSubscribe('user');
    this.router.navigateByUrl('/');
  }
  profile(){
    this.router.navigateByUrl('/profile');
  }
  
  
  }
  