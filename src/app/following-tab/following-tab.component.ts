import { DashboardService } from './../dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-following-tab',
  templateUrl: './following-tab.component.html',
  styleUrls: ['./following-tab.component.css']
})
export class FollowingTabComponent implements OnInit {
  
  constructor(private router : Router,private dashboardService: DashboardService) {
    
  }

  ngOnInit(): void {
    this.dashboardService.setMenu(true)
  }
  ngOnDestroy(){
    this.dashboardService.setMenu(false)
  }
  

}
