import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'fcb-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.scss']
})
export class RecipeDetailsPageComponent implements OnInit, OnDestroy {

  public recipe: any = {};

  private _paramSub: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _recipeService: RecipeService,
    private _ingredientService: IngredientService,
  ) { }

  public ngOnInit(): void {
    this._paramSub = this._activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.setupData(params.get('id'));
      }
    );
  }

  public ngOnDestroy(): void {
    this._paramSub.unsubscribe();
  }

  public onIngredientClick(name: string) {

  }

  private setupData(id: string) {
    const idx: number = parseInt(id, 10);
    this.recipe = this._recipeService.getOne(idx);
    const ingredients: any[] = this._ingredientService.getByName( this.recipe.ingredients.map( (object) => (object.name)) );
    this.recipe.ingredients.forEach( (ingredient, index) => {
      ingredient.details = ingredients[index];
    });
  }
}
