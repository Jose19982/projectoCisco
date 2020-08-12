import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,Validators, FormControl, FormGroup} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

interface mes {
  value: string;
  viewValue: string;
}

interface canal {
  value: string;
  viewValue: string;
}

interface devueltosino {
  value: string;
  viewValue: string;
}

interface estado{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-consulta-prestamo',
  templateUrl: './edit-consulta-prestamo.component.html',
  styleUrls: ['./edit-consulta-prestamo.component.scss'],
})
export class EditConsultaPrestamoComponent implements OnInit {

  @Input() pullDataTable;

  minDate = new Date ();
  maxDate = new Date ();
  diasTrans;
  editable: boolean = false; 
  
  
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private modalCtrl: ModalController, 
    public alertController: AlertController) { }

    regresar (){
      this.modalCtrl.dismiss();
    }

    fecha(){
    let realDevolucion = this.contactForm.get('realDevolucion').value;
    const milisegundosDia = 24 * 60 * 60 * 1000;
    const milisegundosTranscurridos = Math.abs(new Date(realDevolucion).getTime() - new Date(this.pullDataTable.fechaDelPrestamo).getTime());
    this.diasTrans = Math.round(milisegundosTranscurridos/milisegundosDia);
    this.contactForm.controls['diasTranscurridos'].setValue(this.diasTrans);
    
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Tus cambios se han modificado con èxito!',
        buttons: ['OK'],
      });
    
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);
    }
    
    ngOnInit() {
      this.contactForm = this.fb.group ({
        codigoOfLand : new FormControl (this.pullDataTable.codigoDelPrestamo),
        equipoPrestado : new FormControl (this.pullDataTable.equipoPrestadoPid),
        serial : new FormControl (this.pullDataTable.serial),
        canal : new FormControl (this.pullDataTable.canal),
        fechaPrestamo : new FormControl (new Date(this.pullDataTable.fechaDelPrestamo)),
        mesOfLand : new FormControl (this.pullDataTable.mes),
        devolucionEstimada : new FormControl (new Date (this.pullDataTable.devolucionEstimada)),
        realDevolucion : new FormControl (''),
        estado : new FormControl (this.pullDataTable.devuelto),
        estadoReal : new FormControl (this.pullDataTable.estadoReal),
        diasTranscurridos : new FormControl (''),
        observaciones : new FormControl (this.pullDataTable.observaciones),
      });

    }
  
    getErrorMessage() {
        return 'Este campo es requerido';
    }
  
    onSubmit () {
      console.log(this.contactForm.value);
      return this.regresar()
    }
  
    get codigoOfLand(){ return this.contactForm.get('codigoOfLand');}
    get equipoPrestado(){ return this.contactForm.get('equipoPrestado');}
    get serial(){ return this.contactForm.get('serial');}
    get canal(){ return this.contactForm.get('canal');}
    get fechaPrestamo(){ return this.contactForm.get('fechaPrestamo');}
    get mesOfLand(){ return this.contactForm.get('mesOfLand');}
    get devolucionEstimada(){ return this.contactForm.get('devolucionEstimada');}
    get realDevolucion(){ return this.contactForm.get('realDevolucion');}
    get estado(){ return this.contactForm.get('estado');}
    get estadoReal(){ return this.contactForm.get('estadoReal');}
    get diasTranscurridos(){ return this.contactForm.get('diasTranscurridos');}
    get observaciones(){ return this.contactForm.get('observaciones');}
  
  
    canalValue: canal[] = [
      {value: 'CISCO', viewValue: 'CISCO'},
      {value: 'davivienda', viewValue: 'DAVIVIENDA'},
      {value: 'SCOTIABANK', viewValue: 'SCOTIABANK'},
      {value: 'BANCOLOMBIA', viewValue: 'BANCOLOMBIA'},
    ];
  
    devueltosinos: devueltosino[] = [
      {value: 'si', viewValue: 'SI'},
      {value: 'no', viewValue: 'NO'},
    ];
  
    estadoValue: estado[] = [
      {value: 'prestado', viewValue: 'PRESTADO'},
      {value: 'devuelto', viewValue: 'DEVUELTO'},
      {value: 'vencido', viewValue: 'VENCIDO'},
    ];
  
    mesValue: mes[] = [
      {value: 'enero', viewValue: 'Enero'},
      {value: 'febrero', viewValue: 'Febrero'},
      {value: 'marzo', viewValue: 'Marzo'},
      {value: 'abril', viewValue: 'Abril'},
      {value: 'mayo', viewValue: 'Mayo'},
      {value: 'junio', viewValue: 'Junio'},
      {value: 'julio', viewValue: 'Julio'},
      {value: 'agosto', viewValue: 'Agosto'},
      {value: 'septiembre', viewValue: 'Septiembre'},
      {value: 'octubre', viewValue: 'Octubre'},
      {value: 'noviembre', viewValue: 'Noviembre'},
      {value: 'diciembre', viewValue: 'Diciembre'},
    ]
    

}
