import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'Alejandro';
  nombreUpper: string = 'ALEJANDRO';
  nombreRaro: string = 'AlEjAnDRo';

  fecha: Date = new Date();
}
