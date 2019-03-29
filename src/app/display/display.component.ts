import { Component, OnInit} from '@angular/core';
import { ReposRequestService } from '../repos-http/repos-request.service';
import { Repository } from '../repository-class/repository';
import { User } from '../user-class/user';
import { UserRequestService } from '../user-http/user-request.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  providers: [ReposRequestService, UserRequestService],
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  userRequestService: UserRequestService;
  reposRequestService: ReposRequestService;

  user: User;

  searchedUser: string = "";
  
  constructor(userRequestService: UserRequestService, reposRequestService: ReposRequestService, private http:Http, private router: Router) { }

  ngOnInit() {

    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;

    
   }

}


// import { Component, OnInit } from '@angular/core';
// import {Http, Response} from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';

// @Component({
//    selector: 'app-display',
//    templateUrl: './display.component.html',

//    styleUrls: ['./display.component.css']
//   })

// export class DisplayComponent implements OnInit {

//   constructor(private http:Http){}
//   userName="";
//   githubData:any="";
//   avatarUrl="";


// userRequest(){
// this.http.get(environment.apiUrl+this.userName+"?access_token="+environment.access_token)
// .subscribe(
//   (response:Response)=>{
//     const userData=response.json();
//     this.githubData=userData;

//     this.avatarUrl=userData.avatar_url;
//     console.log(userData);
//   }
// )






// }
// ngOnInit() {}
// }