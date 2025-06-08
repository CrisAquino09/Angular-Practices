import { Component, OnInit } from '@angular/core';
import { ServiceWs } from '../../Service/service-ws';
import { Tarea } from '../../Entidades/Tarea';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-editar',
  imports: [FormsModule],
  templateUrl: './tarea-editar.html',
  styleUrl: './tarea-editar.css'
})
export class TareaEditar implements OnInit{
    constructor(private router : Router, private service : ServiceWs){}

    tarea : Tarea = new Tarea();
    ngOnInit(): void {
      this.buscarTarea();
    }

    buscarTarea(){
      const tareaString = localStorage.getItem('tarea');
      if(tareaString){
        console.log(JSON.parse(tareaString));
        this.tarea = JSON.parse(tareaString);
      }

      this.service.buscarTWS(this.tarea).subscribe(data =>{
        Swal.fire({
          title: "EDITAR",
          icon: "success",
          text: "Informacion Cargada Exitosamente",
          showConfirmButton: false,
          draggable: true
        });
        console.log(JSON.stringify(data));
      }, error =>{
        Swal.fire({
          icon: "warning",
          title: "ERROR...",
          text: "Error al cargar los datos",
          confirmButtonText: "OK"
        });
        console.log(JSON.stringify(error));
      });
    }

    editarTarea(){
      this.service.editarTWS(this.tarea).subscribe(data =>{
        Swal.fire({
          title: "ÉXITO",
          icon: "success",
          text: "Registro actualizado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(JSON.stringify(data));
        this.router.navigate(['listarT']);
      },error => {
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Hubo un errro inesperado al actualizar el registro",
          showConfirmButton: false
        });
        console.log(JSON.stringify(error));
        this.router.navigate(['editarT']);
      })
    }
    volverAlHome() {
    this.router.navigate(['/']);
  }
}
