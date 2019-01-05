import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World project {{title}} - {{greeting}}</h1>
    <h1>Hello World project {{title + ' - ' + greeting}}</h1>
    <button (click)="onClick()">Confirm</button>
    <input type="text" placeholder="provide your input" #box (keyup)="onKeyUp(box.value)">
    <h3>Your provided input : {{providedInput}}</h3>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gui';
  public greeting: string;
  public providedInput: string;
  constructor(){
    this.greeting = "Hello !";
  }

  public onClick(){
    alert("confirmed !")
  }

  public onKeyUp(box: string){
    this.providedInput = box;
  }
}
