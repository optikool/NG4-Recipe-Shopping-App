import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  private dbLink: string;
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {
    //this.dbLink = 'https://ng-recipe-book-2-39e90.firebaseio.com/recipes.json';
    this.dbLink = 'https://ng-recipe-book-508c7.firebaseio.com/recipes.json';
   }

  storeRecipes() {
    const token = this.authService.getToken();
    
    return this.http.put(
      this.dbLink  + '?auth=' + token, 
      this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    
    return this.http.get(
      this.dbLink + '?auth=' + token
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
