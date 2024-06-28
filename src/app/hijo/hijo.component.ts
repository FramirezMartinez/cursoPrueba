import { Component,  Output,EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
public mensaje: string='';

ngOnInit(): void {

}
constructor(){}
  //Este mensajer que recibe desde el padre
//@Input() recibeHijo:string='';
@Output() mensajeDesdeHijo = new EventEmitter<string>();

enviarMensaje(){
   this.mensaje ='';
  this.mensajeDesdeHijo.emit(this.mensaje);
}
}
