import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {User} from '../models/user';

@Injectable()
export class ThemeService {

  private theme: number;

  constructor() {
    this.theme = 0;
  }

  setTheme(value: number) {
    this.theme = value;
  }

  getSelectedThemeNavBar() {
    return (this.theme === 0) ? 'navbar-light bg-light' : 'navbar-dark bg-dark';
  }

  getSelectedThemeBackground() {
    return (this.theme === 0) ? 'background-light' : 'background-dark';
  }

  getSelectedThemeBody() {
    return (this.theme === 0) ? 'white' : 'black';
  }
}
