import { Injectable } from '@angular/core';

import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzServie {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter ( characer: Character ) : void {
    const newCharacter = {
      id: uuid(),
      ...characer
    }
    this.characters.push( newCharacter );
  }

  // onDeleteCharacter ( index: number ): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById ( id: string ): void {
    const newCharacters = this.characters.filter((character) => {
      return character.id !== id
    })
    this.characters = newCharacters;
  }



}






