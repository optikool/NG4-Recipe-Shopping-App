import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export interface AppState {
    shoppingList: State
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}
const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updateIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updateIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients,
                editIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            const editIngredient = {...state.ingredients[state.editedIngredientIndex]};
            return {
                ...state,
                editedIngredient: editIngredient,
                editedIngredientIndex: action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editIngredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
}