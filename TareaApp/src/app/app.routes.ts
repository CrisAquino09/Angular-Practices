import { Routes } from '@angular/router';
import { TareaListar } from './Component/tarea-listar/tarea-listar';
import { TareaEditar } from './Component/tarea-editar/tarea-editar';
import { TareaGuardar } from './Component/tarea-guardar/tarea-guardar';

export const routes: Routes = [
    {path: 'listarT', component : TareaListar},
    {path: 'editarT', component : TareaEditar},
    {path: 'guardarT', component : TareaGuardar}
];
