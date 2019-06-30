import { Effect, Actions } from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import * as RecipeActions from '../store/recipe.actions'
import { Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { HttpClient, HttpRequest } from "@angular/common/http";
import * as fromRecipe from '../store/recipe.reducers';
import { Store } from "../../../../node_modules/@ngrx/store";

@Injectable()
export class RecipeEffects {
    private dbLink:string = 'https://ng-recipe-book-508c7.firebaseio.com/recipes.json';

    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>(this.dbLink, {
                observe: 'body',
                responseType: 'json'
            })
        })
        .map(
            (recipes) => {
                console.log(recipes);
                for (let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };
            }
        );

    @Effect({dispatch: false})
    recipeStore = this.actions$
        .ofType(RecipeActions.STORE_RECIPES)
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', this.dbLink, state.recipes, {reportProgress: true})
            return this.httpClient.request(req)
        });

    constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecipe.FeatureState>) {}
}