import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor( 
    private store: Store<fromApp.AppState>) { }

  onSelect(feature: string) {
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes);
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes())
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  isAuthenticated() {
    return this.store.select('auth').map((authState: fromAuth.State) => {
      return authState.authenticated;
    });
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }
}
