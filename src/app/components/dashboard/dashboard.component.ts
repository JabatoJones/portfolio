import { Component, OnInit } from '@angular/core';
//Observable
import { Subscription } from "rxjs/Subscription";
import { TemplateSrvService } from '../../servicios/template-srv.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  private template:any;
  private templateSuscription: Subscription = null;


  constructor(private templateService: TemplateSrvService) { }

  ngOnInit() {
    this.template = null;
    this.template = this.templateService.getTemplate();
    this.templateSuscription = this.templateService.template$.subscribe(template=>this.template = template)
  }
}
