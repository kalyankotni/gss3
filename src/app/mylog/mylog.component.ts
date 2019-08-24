import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylog',
  templateUrl: './mylog.component.html',
  styleUrls: ['./mylog.component.css']
})
export class MylogComponent implements OnInit {
  myfooddata:any=[];  
  myItems: any=[];

  constructor() {
    this.myfooddata = JSON.parse((localStorage.getItem('allItems')));
    

   }

  ngOnInit() {
    
  
  //  console.log(localStorage.get("item"))

  }



}
