import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Chicken Fajita Wrap', 'Mouth watering spanish wrap', 'https://static.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', [
            new Ingredient('Meet', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Chicken Wings BBQ', 'Delicious chicken wings', 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', [
            new Ingredient('chickent Meet', 1),
            new Ingredient('Onion Rings', 20)
        ]),
        new Recipe('Shish Kebab', 'Eye catching Vegi Shish Kebabs', 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', [
            new Ingredient('Fish Meet', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Butterscotch Pancakes', 'Butterscotch pancakes your mom use to make', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', [
            new Ingredient('Flower', 1),
            new Ingredient('Eggs', 1)
        ])
      ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}