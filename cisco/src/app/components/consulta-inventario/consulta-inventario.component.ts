import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ModalController } from '@ionic/angular';
import { AgregarPrestamoComponent } from '../agregar-prestamo/agregar-prestamo.component';
import {AgregarInventarioComponent} from '../agregar-inventario/agregar-inventario.component'
import { EditPrestamoComponent} from '../edit-prestamo/edit-prestamo.component';

export interface PeriodicElement {
  anadir: string;
  seccion: string;
  posicion: string;
  estado: string;
  producto: string;
  pdrPid: string;
  serial: string;
  codigoGet: string;
  canal: string;
  observaciones: string;
  editar: string;
  borrar: string;
}

 let ELEMENT_DATA: PeriodicElement[] = [
  {anadir: '',seccion: 'seccion a', posicion: 'J2', estado: 'disponible', producto: '26783', pdrPid: 'Router', serial: 'HQ2-I9-UYE6-21', codigoGet: '23893472', canal: 'Cisco', observaciones: 'El equipo se entrego en perfecto estado', editar: '', borrar: '' },
];

@Component({
  selector: 'app-consulta-inventario',
  templateUrl: './consulta-inventario.component.html',
  styleUrls: ['./consulta-inventario.component.scss'],
})
export class ConsultaInventarioComponent implements OnInit {

  open=false;

  displayedColumns: string[] = ['anadir', 'seccion', 'posicion', 'estado', 'producto', 
  'pdrPid', 'serial', 'codigoGet', 'canal', 'observaciones', 'editar', 'borrar'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  deletear (){
  }
  
  async formAddInv (){

    const modal = await this.modalCtrl.create({
      component: AgregarInventarioComponent,
      componentProps: {
        seccion: ''
      },
      cssClass:"modalvisual"
    });

    await modal.present();
  }

  async formAddLend (element){

    const modal = await this.modalCtrl.create({
      component: AgregarPrestamoComponent,
      componentProps: {
        pullDataTable: element
      },
      cssClass:"modalvisual"
    });

    await modal.present();
  }

  applyFilter(filterValue: string){
      this.dataSource.filter = filterValue.trim(). toLowerCase();
  }

  async formEdit (element){

    const modal = await this.modalCtrl.create({
      component: EditPrestamoComponent,
      componentProps: {
        editInv: element
      },
      cssClass:"modalvisual"
    });
    
    await modal.present();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

}
