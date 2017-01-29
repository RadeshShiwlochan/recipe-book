import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {Ingredients} from "../ingredients";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Crab Curry', 'Spicy Crab', 'http://www.jehancancook.com/wp-content/uploads/2015/10/Crab-Curry-9-1024x1017.jpg',[
      new Ingredients('Blue Brab', 5),
      new Ingredients('Tumeric', 1),
      new Ingredients('Curry Powder', 1)
    ]),
    new Recipe('Shrimp with Garlic Sauce', 'Spicy Shrimp', 'http://damndelicious.net/wp-content/uploads/2014/04/IMG_5191edit.jpg',[]),
    new Recipe('Lobster Salad', 'Lobster with Avocado','https://s-media-cache-ak0.pinimg.com/originals/d6/46/e0/d646e0bdb17720937697492753bf5cef.jpg',[])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
