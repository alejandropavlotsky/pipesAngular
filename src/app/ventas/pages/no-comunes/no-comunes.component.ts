import { Component } from '@angular/core';

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
}
