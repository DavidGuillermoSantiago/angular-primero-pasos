import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  public title : string = '02-componente-hero';

  public contador: number = 10;

  changeContador ( value: number ): void {
    this.contador += value;
  }

  reset (): void {
    this.contador = 10;
  }




}
