import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TareaApp';

  constructor(private router : Router){}

  //Funcoines para nagvegar entre Componentes

  listarT(){
    this.router.navigate(['listarT']);
  }

  guardarT(){
    this.router.navigate(['guardarT']);
  }

  editarT(){
    this.router.navigate(['editarT']);
  }


}
