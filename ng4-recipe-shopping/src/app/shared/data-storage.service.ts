import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private dbLink: string;
  constructor(private http: Http, private recipeService: RecipeService) {
    this.dbLink = 'https://ng-recipe-book-2-39e90.firebaseio.com/recipes.json';
   }

  storeRecipes() {
    return this.http.put(
      this.dbLink, 
      this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(
      this.dbLink
    )
    .subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();

        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = []
          }
        }

        this.recipeService.setRecipes(recipes);
      }
    )
  }
}
