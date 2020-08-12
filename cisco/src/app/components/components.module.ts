import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {ConsultaInventarioComponent} from '../components/consulta-inventario/consulta-inventario.component';
import { AppModuleModule } from '../app-module.module';
import {ConsultaPrestamoComponent} from '../components/consulta-prestamo/consulta-prestamo.component';
import {AgregarPrestamoComponent} from '../components/agregar-prestamo/agregar-prestamo.component';
import {AgregarInventarioComponent} from '../components/agregar-inventario/agregar-inventario.component';
import { EditPrestamoComponent } from '../components/edit-prestamo/edit-prestamo.component';
import { EditConsultaPrestamoComponent} from '../components/edit-consulta-prestamo/edit-consulta-prestamo.component'
import { AgregarCanalComponent } from '../components/agregar-canal/agregar-canal.component'

@NgModule({
  declarations: [ConsultaInventarioComponent,ConsultaPrestamoComponent,AgregarPrestamoComponent,AgregarInventarioComponent, EditPrestamoComponent, 
    EditConsultaPrestamoComponent, AgregarCanalComponent],
  exports : [ConsultaInventarioComponent,ConsultaPrestamoComponent,AgregarPrestamoComponent,AgregarInventarioComponent, EditPrestamoComponent, 
    EditConsultaPrestamoComponent, AgregarCanalComponent],
  imports: [
    CommonModule,
    IonicModule,
    AppModuleModule,
    
  ]
})
export class ComponentsModule { }
