import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class dbzService {
    
    public characters: Character [] = [{
        id: uuid(),
        name: 'Krillin',
        power: 100
    },{
        id: uuid(),
        name: 'Goku',
        power: 950
    },{
        id: uuid(),
        name: 'vegueta',
        power:450

    }
    ];
  

    addCaharacter(character:Character):void{

        const newCharacter: Character = {...character,id: uuid(),}


        this.characters.push(newCharacter);
    }

    /* onDeleteCharacter(index:number):void{
        this.characters.splice(index,1);
    } */

    deleteCharacterById ( id:string) {
        this.characters = this.characters.filter (character => character.id !== id);
    }
    
}