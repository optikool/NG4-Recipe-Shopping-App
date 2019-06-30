import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers'
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  subscription: Subscription;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

  onRecipeSelected(recipe: Recipe) {
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
