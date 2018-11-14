import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Observable
import { Subscription } from "rxjs/Subscription";
import { TemplateSrvService } from '../../servicios/template-srv.service';
//Session
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  private template:any;
  private templateSuscription: Subscription = null;

  constructor(private templateService: TemplateSrvService,protected localStorage: LocalStorage,private router: Router) { }

  ngOnInit() {
    this.template = null;
    this.template = this.templateService.getTemplate();
    this.templateSuscription = this.templateService.template$.subscribe(template=>this.template = template);
    let user = sessionStorage.getItem('user');
    this.localStorage.getItem('user').subscribe((user) => {
      if ( user == null) {
        this.router.navigateByUrl('/');
      }
    });
  }  
}
