import { Component, OnInit } from '@angular/core';
import {GithubSerService} from '../services/github-ser.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

user:any;
repos:any;
username:any = '';
  constructor(private _githubService:GithubSerService) {
      this.user = false;
  }

  search(){
    this._githubService.updateUsername(this.username);
    this._githubService.getUsers().subscribe(user=>{
      this.user = user;
      console.log(this.user);
    });

      this._githubService.getRepos().subscribe(repos=>{
      this.repos = repos;
      console.log(this.repos);
    });
  }

  ngOnInit() {
  }

}
