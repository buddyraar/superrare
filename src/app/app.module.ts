import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { SubMainComponent } from './sub-main/sub-main.component';
import { FollowingTabComponent } from './following-tab/following-tab.component';  

const appRoutes:Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'following-tab',
    component: FollowingTabComponent
  },

] 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    MainComponent,
    SubMainComponent,
    FollowingTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
