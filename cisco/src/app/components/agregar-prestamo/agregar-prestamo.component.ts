import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,Validators, FormControl, FormGroup} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AgregarCanalComponent} from '../agregar-canal/agregar-canal.component';

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
  selector: 'app-agregar-prestamo',
  templateUrl: './agregar-prestamo.component.html',
  styleUrls: ['./agregar-prestamo.component.scss'],
})

export class AgregarPrestamoComponent implements OnInit {

  @Input() pullDataTable;

  minDate = new Date ();
  maxDate = new Date ();
  contactForm: FormGroup;
  editable: boolean = false;

  constructor(private fb: FormBuilder, private modalCtrl: ModalController, 
  public alertController: AlertController) { }

  regresar (){
    this.modalCtrl.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Tu prestamo se ha registrado con exito!',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  
  ngOnInit() {
    this.contactForm = this.fb.group ({
      lastCodigo : new FormControl ('',[Validators.required]),
      codigoOfLand : new FormControl ('',[Validators.required]),
      equipoPrestado : new FormControl (this.pullDataTable.pdrPid),
      serial : new FormControl (this.pullDataTable.serial),
      canal : new FormControl ('',[Validators.required]),
      fechaPrestamo : new FormControl ('',[Validators.required]),
      mesOfLand : new FormControl ('', [Validators.required]),
      devolucionEstimada : new FormControl ('', [Validators.required]),
      estado : new FormControl ('prestado'),
      observaciones : new FormControl ('')
    });

  }

  async formAddCanal (){

    const modal = await this.modalCtrl.create({
      component: AgregarCanalComponent,
      componentProps: {
         
      },
      cssClass:"modalvisual"
    });

    await modal.present();
  }

  getErrorMessage() {
      return 'Este campo es requerido';
  }

  onSubmit () {
    console.log(this.contactForm.value);
    return this.regresar()
  }

  get lastCodigo(){ return this.contactForm.get('lastCodigo');}
  get codigoOfLand(){ return this.contactForm.get('codigoOfLand');}
  get equipoPrestado(){ return this.contactForm.get('equipoPrestado');}
  get serial(){ return this.contactForm.get('serial');}
  get canal(){ return this.contactForm.get('canal');}
  get fechaPrestamo(){ return this.contactForm.get('fechaPrestamo');}
  get mesOfLand(){ return this.contactForm.get('mesOfLand');}
  get devolucionEstimada(){ return this.contactForm.get('devolucionEstimada');}
  get estado(){ return this.contactForm.get('estado');}
  get observaciones(){ return this.contactForm.get('observaciones');}


  canalValue: canal[] = [
    {value: 'Cisco', viewValue: 'Cisco'},
    {value: 'Claro', viewValue: 'Claro'},
    {value: 'Movistar', viewValue: 'Movistar'},
    {value: 'Davivienda', viewValue: 'Davivienda'},
    {value: 'Scotiabank', viewValue: 'Scotiabank'},
    {value: 'Bancolombia', viewValue: 'Bancolombia'},
  ];

  devueltosinos: devueltosino[] = [
    {value: 'si', viewValue: 'si'},
    {value: 'no', viewValue: 'no'},
  ];

  estadoValue: estado[] = [
    {value: 'prestado', viewValue: 'PRESTADO'},
  ];

  mesValue: mes[] = [
    {value: 'Enero', viewValue: 'Enero'},
    {value: 'Febrero', viewValue: 'Febrero'},
    {value: 'Marzo', viewValue: 'Marzo'},
    {value: 'Abril', viewValue: 'Abril'},
    {value: 'Mayo', viewValue: 'Mayo'},
    {value: 'Junio', viewValue: 'Junio'},
    {value: 'Julio', viewValue: 'Julio'},
    {value: 'Agosto', viewValue: 'Agosto'},
    {value: 'Septiembre', viewValue: 'Septiembre'},
    {value: 'Octubre', viewValue: 'Octubre'},
    {value: 'Noviembre', viewValue: 'Noviembre'},
    {value: 'Diciembre', viewValue: 'Diciembre'},
  ]

  
}
