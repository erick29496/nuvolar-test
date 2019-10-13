import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {async} from 'rxjs/internal/scheduler/async';
import {Router} from '@angular/router';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userList: Array<User>;
  page: number;
  pageSize: number;
  actualPage: number;

  constructor(private router: Router,
              private githubService: GithubService) { }

  ngOnInit() {
    this.page = 1;
    this.actualPage = 1;
    this.pageSize = 10;
  }

  navigatesUserDetail(user: User) {
    this.githubService.setUserSelected(user);
    this.router.navigate(['/detail/', user.name]);
  }

  onPageChange(page: number) {
    this.actualPage = page;
  }

  getUserListPaginated() {
    const start = (this.actualPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.userList.slice(start, end);
  }
}
