import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {GithubService} from './services/github.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserListComponent } from './user-list/user-list.component';
import {ThemeService} from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserDetailComponent,
    SearchPageComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    GithubService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
