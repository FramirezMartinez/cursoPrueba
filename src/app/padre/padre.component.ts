import { Component, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  mensajeRecibido: string = '';

  reciboMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }




  valorContador: number = 0
  //mensajePadre='mensaje desde el padre'







  incrementar() { this.valorContador++; }
  dequecrementar() {
    this.valorContador--;
  }
}
