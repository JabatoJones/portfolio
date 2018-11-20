import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UserService } from "../../servicios/user-service.service";
import { User } from "../../models/userlogin";
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  
  public user: User;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private router: Router,private uploadService: UploadFileService, private userService: UserService, protected localStorage: LocalStorage) { }

  ngOnInit() {
    this.localStorage.getItem('user').subscribe((user) => {
      if (user == null) {
        this.router.navigateByUrl('/');
      } else {
        this.user = new User(user);
        this.user.img = this.user.img ? this.user.img : '../../../assets/img/user.svg';
        this.localStorage.setItem('user', this.user).subscribe(() => { }, () => { });
      }
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        let img = JSON.parse(event.body);
        let imgUrl = "../../../assets/img/"+img;
        this.user.img = imgUrl;
        console.log(imgUrl);
        this.localStorage.setItem('user', this.user).subscribe(() => { }, () => { });
      }
    });

    this.selectedFiles = undefined;
  }

}