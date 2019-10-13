import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GithubService} from '../services/github.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchValue: string;
  @Output() searchUserListEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.searchValue = '';
  }

  searchUserList(event: string) {
    this.searchUserListEmit.emit(this.searchValue);
  }
}

