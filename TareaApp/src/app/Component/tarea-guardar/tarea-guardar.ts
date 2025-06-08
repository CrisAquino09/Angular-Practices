import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWs } from '../../Service/service-ws';
import { Tarea } from '../../Entidades/Tarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea-guardar',
  imports: [FormsModule],
  templateUrl: './tarea-guardar.html',
  styleUrl: './tarea-guardar.css'
})
export class TareaGuardar {

  constructor(private router : Router, private service : ServiceWs){}

  tarea : Tarea = new Tarea();

  guardarTarea(){
    this.service.guardarTWS(this.tarea).subscribe(data =>{
      Swal.fire({
          icon: "success",
          title: "GUARDAR",
          text: "Elemento Guardado Exitosamente",
          showConfirmButton: false,
          timer:2200
        });
        console.log(JSON.stringify(data));
        this.router.navigate(['listarT']);
    }, error =>{
      Swal.fire({
        icon: "error",
        title: "GUARDAR",
        text: "Ocurrio Un Error!, Intente de nuevo ",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(JSON.stringify(error));
      this.router.navigate(['listarT']);
    })
  }

  volverAlHome() {
    this.router.navigate(['/']);
  }
}
