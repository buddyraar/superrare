import { FollowingTabComponent } from './following-tab/following-tab.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo:'dashboard',pathMatch: 'full' },
  {path:'',component:MainComponent},
  {path:'search',component:SearchComponent},
  {path:'following-tab',component:FollowingTabComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
