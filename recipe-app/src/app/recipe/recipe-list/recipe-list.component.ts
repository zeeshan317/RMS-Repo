import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('Salad', 'Use this recipe to create a fine salad in 15 Minutes',
  'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg'),
  new Recipe('Chicken','Lets make a fine chicken in 30 minutes ',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNJK85PD5peGikZsAUYNqocsOTWQMx4ycldlazKfYsEyE0gv31A&s')
];
  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe){
    this.theRecipe.emit(recipe);
  }
}
