import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWs } from '../../Service/service-ws';
import { Tarea } from '../../Entidades/Tarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea-listar',
  imports: [],
  templateUrl: './tarea-listar.html',
  styleUrl: './tarea-listar.css'
})
export class TareaListar implements OnInit{
  constructor(private router : Router, private service : ServiceWs){}

  tarea : Tarea = new Tarea();
  tareas !: Tarea[];

  ngOnInit(): void {
    this.listarTarea();
  }

  listarTarea(){
    this.service.listarTWS().subscribe(data =>{
      this.tareas = data;
      console.log("Listado Exitoso: " + JSON.stringify(data));
    })
  }

  editarButton(tarea : Tarea){
    localStorage.setItem('tarea', JSON.stringify(tarea));
    console.log(localStorage);
    this.router.navigate(['editarT']);
  }

  eliminarButton(tarea : Tarea){
    Swal.fire({
      title: "Estas seguro que deseas eliminar la tarea: " + tarea.descripcion + "?",
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarTWS(tarea).subscribe(data => {
          Swal.fire({
          title: "Tarea Eliminada!",
          text: "El registro ha sido eliminado.",
          icon: "success"
        });
        this.listarTarea();
        });
      }else if(result.isDenied){
        Swal.fire("La eliminacion Fue Cancelada")
      }
    });
  }
}
