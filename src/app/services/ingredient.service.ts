import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private _items: any[] = this._generateData();

  constructor() { }

  public getAll(): any[] {
    return this._items;
  }

  public getById(id: number): any {
    return this.getAll()[id];
  }

  public getByName(name: string | string[]): any | any[] {
    const query: string[] = [];
    if (typeof name === 'string') {
      query.push(name);
    } else if (Array.isArray(name)) {
      query.push(...name);
    } else {
      throw new Error('Invalid query parameter type.');
    }

    const ingredients: any[] = this.getAll();
    const result: any[] = [];
    query.forEach( (itemName) => {
      const foundIngredients: any[] = ingredients.filter( (ingredient) => (ingredient.name === itemName) );
      if (foundIngredients.length === 0) {
        throw new Error('Ingredient with name ' + itemName + ' not found.');
      } else if (foundIngredients.length > 1) {
        throw new Error('More than one ingredient with name ' + itemName + ' found.');
      }
      result.push( foundIngredients[0] );
    });
    if (typeof name === 'string') {
      return result[0];
    }
    return result;
  }

  private _generateData(): any[] {
    const items: any[] = [
      {
        img: 'assets/img/zwiebel.jpg',
        title: 'Zwiebel',
        name: 'ZWIEBEL',
        einheit: 'Stk',
        art: 'Gemüse',
      }, {
        img: 'assets/img/paprika.jpg',
        title: 'Paprika',
        name: 'PAPRIKA',
        einheit: 'Stk',
        art: 'Gemüse',
      }, {
        img: 'assets/img/spaetzle.jpg',
        title: 'Spätzle',
        name: 'SPÄTZLE',
        einheit: 'g',
        art: 'Beilage',
      }, {
        img: 'assets/img/reis.jpg',
        title: 'Reis',
        name: 'REIS',
        einheit: 'g',
        art: 'Getreide',
      }, {
        img: 'assets/img/tomaten.jpg',
        title: 'Tomaten',
        name: 'TOMATE',
        einheit: 'Stk',
        art: 'Gemüse',
      }, {
        img: 'assets/img/wasser.jpg',
        title: 'Wasser',
        name: 'WASSER',
        einheit: 'mL',
        art: 'Wasser'
      }, {
        img: 'assets/img/linsen.jpg',
        title: 'Linsen',
        name: 'LINSEN',
        einheit: 'g',
        art: 'Hülsenfrucht'
      }, {
        img: 'assets/img/frankfurter.jpg',
        title: 'Frankfurter',
        name: 'FRANKFURTER',
        einheit: 'g',
        art: 'Wurst'
      }, {
        img: 'assets/img/sauerrahm.jpg',
        title: 'Sauerrahm',
        name: 'SAUERRAHM',
        einheit: 'mL',
        art: 'Milchprodukt'
      }, {
        img: 'assets/img/oregano.jpg',
        title: 'Oregano',
        name: 'OREGANO',
        einheit: 'TL',
        art: 'Kräuter'
      }, {
        img: 'assets/img/bohnenkraut.jpg',
        title: 'Bohnenkraut',
        name: 'BOHNENKRAUT',
        einheit: 'TL',
        art: 'Kräuter'
      }, {
        img: 'assets/img/lorbeer.jpg',
        title: 'Lorbeer Blätter',
        name: 'LORBEER',
        einheit: 'Stk',
        art: 'Kräuter'
      }, {
        img: 'assets/img/salz.jpg',
        title: 'Salz',
        name: 'SALZ',
        einheit: 'TL',
        art: 'Gewürz'
      }, {
        img: 'assets/img/pfeffer.jpg',
        title: 'Pfeffer',
        name: 'PFEFFER',
        einheit: 'TL',
        art: 'Gewürz'
      }, {
        img: 'assets/img/bouillon-würfel.jpg',
        title: 'Bouillon Würfel',
        name: 'BOUILLON_WÜRFEL',
        einheit: 'Stk',
        art: 'Gewürz'
      }, {
        img: 'assets/img/olivenöl.jpg',
        title: 'Olivenöl',
        name: 'OLIVENÖL',
        einheit: 'EL',
        art: 'Fette und Öle'
      }
    ];
    return items;
  }
}
