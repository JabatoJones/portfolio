import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(config: NgbTabsetConfig, public http: HttpClient) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
  ngOnInit() {
  }
  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
    // this.http is the injected HttpClient
    this.http.post('my-backend.com/fileupload',file)
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }
}
