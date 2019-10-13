import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubService} from '../services/github.service';
import {User} from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute,
              private githubService: GithubService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user = this.githubService.getUserSelected();
    console.log(this.user);
    const username = this.route.snapshot.paramMap.get('username');
    this.githubService.getUserDetail(username).subscribe(
      user => {
        if (this.user === undefined) {
          this.user = new User(user);
        }
        this.user.setUserDetailInfo(user);
        this.user.setUserFollowers(this.githubService.getUserFollowers(username));
        this.user.setUserRepos(this.githubService.getUserRepositories(username));
      });
  }

}
