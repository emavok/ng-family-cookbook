import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'fcb-recipe-search-results',
  templateUrl: './recipe-search-results.component.html',
  styleUrls: ['./recipe-search-results.component.scss']
})
export class RecipeSearchResultsComponent implements OnInit {

  @Output() public recipeSelect: EventEmitter<number> = new EventEmitter<number>();

  public items: any[] = [];

  constructor(
    private _recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.items = this._recipeService.getAll();
  }

  public onItemClick(event: Event, index: number) {
    event.preventDefault();
    this.recipeSelect.emit(index);
  }
}
