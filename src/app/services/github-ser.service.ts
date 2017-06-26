import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubSerService {

  private username = 'shashik-edgz';
  private clientId= '65c92201ec2352f1021d';
  private clientSecret = 'e8b8ead625d46ce1ebc23722876fa4d8c10993d6';

  constructor(private _http: Http) {
       console.log("Serveces.......");
   }

   getUsers(){
     return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.clientId+'&client_secret='+this.clientSecret)
      .map(res=>res.json());
   }
   getRepos(){
     return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.clientId+'&client_secret='+this.clientSecret)
     .map(res=>res.json());
   }

   updateUsername(username:any){
  this.username = username;
   }

}
