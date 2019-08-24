import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newentry',
  templateUrl: './newentry.component.html',
  styleUrls: ['./newentry.component.css']
})
export class NewentryComponent implements OnInit {
  foodItemInfo: any[] = [];
  foodCategoryInfo: any[] = [];
  caloriesInfo:any;
  selectedFoodCatg:any;
  selectedFoodItem:any;
  finalOrder: any;
  myItems:any=[]
  nrSelect = '--Select Category--';

  constructor(private _foodservice:MydataService, private router: Router) { 
  }

  ngOnInit() {
    this.getFoods();
  }
  getFoods(){
    this._foodservice.getFood().subscribe(response => {
    this.foodCategoryInfo=response
      console.log('radha--',response)
    },
      err => console.log(err)
    )
  }
  onFoodItems(foodCategoryValue) {
    console.log('ramesh---', foodCategoryValue);
    var foodCatgIndex = foodCategoryValue.split('-');
    this.foodItemInfo=this.foodCategoryInfo[foodCatgIndex[0]].foodItems;
    this.selectedFoodCatg=foodCatgIndex[1];
  




  }
  onCalories(foodItemValue) {
    console.log('rajesh--', foodItemValue);
    var foodCatgIndex = foodItemValue.split('-');
    this.caloriesInfo = foodCatgIndex[2];
    console.log('rajesh22--', this.caloriesInfo);
    this.selectedFoodItem = foodCatgIndex[1];

  }

  saveFoodItems(formData){
 
    localStorage.setItem('items',JSON.stringify(formData))

    this.myItems.push(JSON.parse((localStorage.getItem('items'))));
    localStorage.setItem('allItems',JSON.stringify(this.myItems))
    console.log('suresh--',this.myItems)
    this.router.navigateByUrl('mylog');


  }



}
