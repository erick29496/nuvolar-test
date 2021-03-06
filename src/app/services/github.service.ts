import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {User} from '../models/user';

@Injectable()
export class GithubService {

  private apiSearchUsersUrl = 'https://api.github.com/search/users?q=';
  private token = '778d2db49822f2dfdabf49c62f8a08ba5e6fc254';
  private apiGetUserDetailUrl = 'https://api.github.com/users/';
  private apiGetUserRepositoriesUrl = '/repos';
  private apiGetUserFollowersUrl = '/followers';

  private user: User;

  constructor(private http: HttpClient) {
  }

  searchByUsername(value: string): Observable<Array<User>> {
    const params = new HttpParams().set('access_token', this.token);
    return this.http.get(this.apiSearchUsersUrl + value, {params})
      .pipe(map(response =>
        response['items'] ? response['items'].map(plainUser => new User(plainUser)) : [])
      );
  }

  getUserDetail(username: string): Observable<any> {
    return this.http.get(this.apiGetUserDetailUrl + username);
  }

  getUserRepositories(username: string): Observable<any> {
    return this.http.get(this.apiGetUserDetailUrl + username + this.apiGetUserRepositoriesUrl);
  }

  getUserFollowers(username: string): Observable<any> {
    return this.http.get(this.apiGetUserDetailUrl + username + this.apiGetUserFollowersUrl);
  }

  setUserSelected(user: User) {
    this.user = user;
  }

  getUserSelected() {
    return this.user;
  }
}
