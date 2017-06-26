import { Component } from '@angular/core';
import {GithubComponent} from './github/github.component';
import {GithubSerService} from './services/github-ser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
