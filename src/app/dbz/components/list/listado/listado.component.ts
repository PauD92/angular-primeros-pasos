import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: 'listado.component.html'
})

export class ListadoComponent  {
  
  @Input()
  public characterList: Character[] = [{
    name:'trunk',
    power:200
  }]

  @Output()
  public onDeleteID : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{

    if (!id) return;

    console.log({id})

    this.onDeleteID.emit (id);
  }
}