import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Alejandro';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarCliente() {
    this.nombre = 'Melisa';
    this.genero = 'femenino';
  }

  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Alejandro'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esprando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Alejandro',
    edad: 36,
    direccion: 'Madrid, España',
  };

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
