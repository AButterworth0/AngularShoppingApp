import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg'),
    new Recipe('Second Recipe','This is a second test','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easy-cheap-dinners-weeknight-1604466210.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
