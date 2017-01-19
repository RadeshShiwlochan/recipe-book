import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Crab Curry', 'Spicy Crab', 'http://www.jehancancook.com/wp-content/uploads/2015/10/Crab-Curry-9-1024x1017.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
