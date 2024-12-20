import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{ contador }}</h3>
    <button (click)="changeContador(1)" >+1</button>
    <button (click)="reset()" >Reset</button>
    <button (click)="changeContador(-1)" >-1</button>
  `,
  standalone: false
})
export class CounterComponent {
  public contador: number = 10;


  changeContador(value: number): void {

    this.contador += value;

  }

  reset(): void {
    this.contador = 10;
  }



}

