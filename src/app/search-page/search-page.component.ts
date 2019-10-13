import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GithubService} from '../services/github.service';
import {User} from '../models/user';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  userList: Array<User>;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.userList = [];
  }

  searchUserList(searchValue: string) {
    if (searchValue) {
      this.githubService.searchByUsername(searchValue).subscribe(data => {
        this.userList = data;
      });
    }
    else {
      this.userList = [];
    }
  }

}
