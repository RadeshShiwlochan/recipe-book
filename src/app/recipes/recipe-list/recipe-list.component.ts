import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Crab Curry', 'Spicy Crab', 'http://www.jehancancook.com/wp-content/uploads/2015/10/Crab-Curry-9-1024x1017.jpg',[]),
    new Recipe('Shrimp with Garlic Sauce', 'Spicy Shrimp', 'http://recipes.oregonlive.com/system/recipes/images/000/004/020/hero/shrimp.jpg?1471493610',[]),
    new Recipe('Lobster Salad', 'Lobster with Avocado','http://www.finelobster.com/images/Shrimp-Avodcado-Salad.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
