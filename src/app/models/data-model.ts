export class Tag {
  public id: number;
  public label: string;
}

export class Specialite {
  public id: number;
  public label: string;
  public tags: Tag[];
}

class Pivot {
  public reponse: string;
  public created_at: any;
}

export class Medecin {
  public id: number;
  public cin: string;
  public nom: string;
  public prenom: string;
  public email: string;
  public adresse: string;
  public pivot: Pivot = new Pivot();
}

export class Post {
  public id: number;
  public titre: string;
  public description: string;
  public tags: Tag[];
  public medecins: Medecin[];
  public created_at ?;
  public nouv_reponse ?: string;
}


export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: [ ]
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
