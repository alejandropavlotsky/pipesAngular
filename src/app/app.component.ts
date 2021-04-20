import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primeNGConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  nombre: string = 'Alejandro';
  valor: number = 1000;
  obj = {
    nombre: 'alejandro',
  };

  mostrarNombre() {
    console.log(this.nombre);
  }
}
