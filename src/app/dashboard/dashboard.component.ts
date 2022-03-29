import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from "@angular/router";
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currenturl:any
  isFollowingTab:any
  constructor(private router : Router,private dashboardService: DashboardService) {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.currenturl = window.location.pathname
    //   console.log(params,"q",this.currenturl)
    // })
   }

  ngOnInit(): void {
    this.dashboardService.getMenu().subscribe((data: any) =>
    {
      console.log(data,"qqwerty") 
    this.isFollowingTab = data
    })
    
  }

}
