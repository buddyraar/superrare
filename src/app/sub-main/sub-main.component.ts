import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-sub-main',
  templateUrl: './sub-main.component.html',
  styleUrls: ['./sub-main.component.css']
})
export class SubMainComponent implements OnInit {
  isFollowingTab : any
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.isFollowingTab = window.location.pathname
  }
  // followingTo(){
  //   this.router.navigateByUrl('/following-tab')
  // }

}
