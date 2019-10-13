import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {SearchPageComponent} from './search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-page', pathMatch: 'full' },
  { path: 'search-page', component: SearchPageComponent },
  { path: 'detail/:username', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
