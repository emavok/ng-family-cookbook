import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _items: any[] = this._generateData();

  constructor(
  ) { }

  public getAll(): any[] {
    return this._items;
  }

  public getOne(id: number): any {
    return this.getAll()[id];
  }

  private _generateData(): any[] {
    const items: any[] = [
      {
        img: 'assets/img/letscho-reis.jpg',
        title: 'Letscho mit Reis',
        name: 'LETSCHO',
        ingredients: [
          { name: 'REIS', anzahl: 200 },
          { name: 'WASSER', anzahl: 500 },
          { name: 'ZWIEBEL', anzahl: 1 },
          { name: 'PAPRIKA', anzahl: 3 },
          { name: 'TOMATE', anzahl: 3 },
          { name: 'OLIVENÖL', anzahl: 3 },
          { name: 'LORBEER', anzahl: 4 },
          { name: 'BOUILLON_WÜRFEL', anzahl: 1 },
          { name: 'SALZ', anzahl: 1 },
          { name: 'PFEFFER', anzahl: 1 },
        ],
        steps: [
          'Reis gemeinsam mit dem Wasser und etwas Salz in einem Topf kurz aufkochen. Dann auf schwache Hitze 15-20 Minuten ziehen lassen.',
          // tslint:disable-next-line:max-line-length
          'Zwiebeln schälen und in grobe Stücke schneiden. Paprika waschen, vierteln und Kerne entfernen. Danach in grobe Stücke schneiden. Tomaten waschen und in grobe Würfel schneiden.',
          'Öl in einem Topf erhitzen und Zwiebeln darin andünsten bis sie glasig werden.',
          'Paprika hinzugeben und ca. 5 Minuten mitdünsten.',
          // tslint:disable-next-line:max-line-length
          'Tomaten, Bouillon Würfel und Lorbeerblätter hinzugeben. Kurz aufkochen lassen und dann mit geschlossenen Topfdeckel ca. 15 Minuten leicht köcheln lassen.',
          'Lorbeerblätter entfernen und mit Salz und Pfeffer abschmecken.'
        ]
      }, {
        img: 'assets/img/linsen-mit-spaetzle.jpg',
        title: 'Linsen mit Spätzle',
        ingredients: [
          { name: 'SPÄTZLE', anzahl: 500 },
          { name: 'WASSER', anzahl: 3000 },
          { name: 'ZWIEBEL', anzahl: 1 },
          { name: 'FRANKFURTER', anzahl: 4 },
          { name: 'SAUERRAHM', anzahl: 50 },
          { name: 'BOHNENKRAUT', anzahl: 1 },
          { name: 'SALZ', anzahl: 1 },
          { name: 'PFEFFER', anzahl: 1 },
        ],
        steps: [
          'Spätzle gemäß Packung kochen.',
          'Zwiebeln schälen und in kleine Stücke schneiden. Frankfurter in Scheiben schneiden.',
          'Öl in einem Topf erhitzen und Zwiebeln darin andünsten bis sie glasig werden.',
          'Frankfurter hinzugeben und kurz anbraten.',
          // tslint:disable-next-line:max-line-length
          '250 mL Wasser hinzufügen, den Bouillon Würfel, das Bohnenkraut und die Linsen dazugeben, kurz aufkochen und dann ca. 10 Minuten bei geringer Hitze ziehen lassen.',
          'Sauerrahm dazugeben und mit Salz und Pfeffer abschmecken.'
        ]
      }, {
        img: 'assets/img/nasi-goreng.jpg',
        title: 'Nasi Goreng',
        ingredients: []
      }, {
        img: 'assets/img/ungarisches-gulasch.jpg',
        title: 'Rindsgulasch',
        ingredients: []
      }, {
        img: 'assets/img/vegetarisches-curry.jpg',
        title: 'Vegetarisches Curry',
        ingredients: []
      }
    ];
    return items;
  }
}
