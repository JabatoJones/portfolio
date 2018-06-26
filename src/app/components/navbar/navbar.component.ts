import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TemplateSrvService } from '../../servicios/template-srv.service';
import { Subject } from "rxjs/Subject";

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
    
  constructor(private templateService: TemplateSrvService,private breakpointObserver: BreakpointObserver) {}

  setTemplate(templateNumber:string){
    this.templateService.setTemplate(templateNumber);
  }
  
  
  }
  