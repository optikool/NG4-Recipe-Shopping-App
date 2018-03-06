import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Fajita Wrap', 'Mouth watering spanish wrap', 'https://static.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    new Recipe('Chicken Wings BBQ', 'Delicious chicken wings', 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    new Recipe('Shish Kebab', 'Eye catching Vegi Shish Kebabs', 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    new Recipe('Butterscotch Pancakes', 'Butterscotch pancakes your mom use to make', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')
  ];

  constructor() { }

  ngOnInit() {
  }

}
