import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers'

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[]
}

const initialState: State = {
    recipes: [
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
    ]
};
export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updateRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: oldRecipes
            };
        default: 
            return state;
    }
}