import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user'

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user: User;

  constructor(private http:HttpClient) { 
    this.user = new User("","","","","","","")
  }

  searchedUser: string = "";

  userRequest(){
    
    interface ApiResponse{
      login: string;
      name: string;
      bio: any;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: any;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + this.searchedUser + "?access_token=" + environment.access_token).toPromise().then(response=>{

        this.user.avatar = response.avatar_url
        this.user.username = response.login
        this.user.name = response.name
        this.user.bio = response.bio
        this.user.repositories = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following

        resolve();

      },
      error=>{

        this.user.avatar = ""
        this.user.username = "fuaad001"
        this.user.name = "Hussein Fuaad"
        this.user.bio = "Coding is mbaemby!"
        this.user.repositories = 22
        this.user.followers = 2
        this.user.following = 0

        reject(error);
        
      })
    })

    return promise

  }
}
