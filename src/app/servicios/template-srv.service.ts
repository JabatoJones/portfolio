import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: 'root'
})
export class TemplateSrvService {
  private template: any;
  private templateSubject = new Subject<void>();
  public template$ = this.templateSubject.asObservable();


  constructor() { 
    this.template = localStorage.getItem('template');
   }

  getTemplate(): any {
    return this.template;
  }
  setTemplate(templateNumber:any){
    //Notifica a los que observan el template
    this.templateSubject.next(templateNumber);
    localStorage.setItem('template', templateNumber);
  }
}
