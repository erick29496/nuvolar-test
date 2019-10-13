import {Observable} from 'rxjs';

export class  User {
  id: number;
  name: string;
  imgUrl: string;
  followers$: Observable<any>;
  repos$: Observable<any>;
  followersNum: number;
  followingNum: number;
  reposNum: number;
  completeName: string;
  blog: string;
  location: string;
  email: string;
  url: string;


  constructor(plainUser: any) {
    this.id = plainUser.id;
    this.name = plainUser.login;
    this.imgUrl = plainUser.avatar_url;
  }

  setUserDetailInfo(detailUser: any) {
    this.followersNum = detailUser.followers;
    this.reposNum = detailUser.public_repos;
    this.followingNum = detailUser.following;
    this.completeName = detailUser.name;
    this.blog = detailUser.blog;
    this.location = detailUser.location;
    this.email = detailUser.email;
    this.url = detailUser.html_url;
  }

  setUserFollowers(followersObservable: Observable<Array<string>>) {
    this.followers$ = followersObservable;
  }

  setUserRepos(reposObservable: Observable<Array<string>>) {
    this.repos$ = reposObservable;
  }
}
