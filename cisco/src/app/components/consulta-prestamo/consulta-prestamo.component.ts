import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EditConsultaPrestamoComponent } from '../edit-consulta-prestamo/edit-consulta-prestamo.component';
import { ModalController } from '@ionic/angular';

export interface PeriodicElement {
  equipoPrestadoPid: string;
  codigoDelPrestamo: number;
  serial: string;
  canal: string;
  fechaDelPrestamo: string;
  mes: string;
  devolucionEstimada: string;
  devolucionReal: string;
  devuelto: string;
  estadoReal: string;
  diasTranscurridos: string;
  observaciones: string;
  editar: string;
  borrar: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {codigoDelPrestamo: 21894812, equipoPrestadoPid: 'ROUTER', serial: 'HB78-12WEQ', canal: 'davivienda', fechaDelPrestamo: '07-10-2020', mes: 'enero', devolucionEstimada: '08-09-2020', devolucionReal: '', devuelto: 'no', estadoReal: 'prestado', diasTranscurridos: '', observaciones: 'Se devolvio perfectamente', editar: '', borrar: '' },
];


@Component({
  selector: 'app-consulta-prestamo',
  templateUrl: './consulta-prestamo.component.html',
  styleUrls: ['./consulta-prestamo.component.scss'],
})
export class ConsultaPrestamoComponent implements OnInit {

  fechaDelPrestamo;
  devolucionEstimada;
  estadoReal;

  constructor(private modalCtrl: ModalController) { }
  displayedColumns: string[] = ['codigoDelPrestamo', 'equipoPrestadoPid', 'serial', 'canal', 'fechaDelPrestamo', 'mes', 'devolucionEstimada', 'devolucionReal', 'devuelto', 'estadoReal', 'diasTranscurridos', 'observaciones', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  async formEditLend (element){

    const modal = await this.modalCtrl.create({
      component: EditConsultaPrestamoComponent,
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
}
