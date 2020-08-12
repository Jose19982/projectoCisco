import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,Validators, FormControl, FormGroup} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


interface seccionBodega {
  value: string;
  viewValue: string;
}

interface estado{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-prestamo',
  templateUrl: './edit-prestamo.component.html',
  styleUrls: ['./edit-prestamo.component.scss'],
})

export class EditPrestamoComponent implements OnInit {

  @Input() editInv;
  contactForm: FormGroup;
  editable: boolean = false;

  constructor(private fb: FormBuilder, private modalCtrl: ModalController, 
  public alertController: AlertController) { }

  regresar (){
    this.modalCtrl.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: '',
      message: 'Tu registro ha sido guardado',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  
  ngOnInit() {
    this.contactForm = this.fb.group ({
      seccionInBodega : new FormControl (this.editInv.seccion),
      posicionInBodega : new FormControl (this.editInv.posicion),
      estado : new FormControl (this.editInv.estado),
      nameOfProduct : new FormControl (this.editInv.producto),
      pdrPID : new FormControl (this.editInv.pdrPid),
      serial : new FormControl (this.editInv.serial),
      observacion : new FormControl (this.editInv.observaciones)
    });

  }

  getErrorMessage() {
      return 'Este campo es requerido';  
  }

  onSubmit () {
    console.log(this.contactForm.value);
    return this.regresar()   
  }

  get seccionInBodega(){ return this.contactForm.get('seccionInBodega');}
  get posicionInBodega(){ return this.contactForm.get('posicionInBodega');}
  get estado(){ return this.contactForm.get('estado');}
  get nameOfProduct(){ return this.contactForm.get('nameOfProduct');}
  get pdrPID(){ return this.contactForm.get('pdrPID');}
  get serial(){ return this.contactForm.get('serial');}
  get observacion(){ return this.contactForm.get('observacion');}

  minDate = new Date ();
  maxDate = new Date ();
  

  seccionBode: seccionBodega[] = [
    {value: 'seccion a', viewValue: 'SECCIÒN A'},
    {value: 'seccion b', viewValue: 'SECCIÒN B'},
    {value: 'seccion c', viewValue: 'SECCIÒN C'},
    {value: 'seccion d', viewValue: 'SECCIÒN D'},
    {value: 'seccion e', viewValue: 'SECCIÒN E'},
    {value: 'seccion f', viewValue: 'SECCIÒN F'},
    {value: 'seccion g', viewValue: 'SECCIÒN G'},
    {value: 'seccion h', viewValue: 'SECCIÒN H'},
    {value: 'seccion i', viewValue: 'SECCIÒN I'},
    {value: 'seccion j', viewValue: 'SECCIÒN J'},
    {value: 'seccion k', viewValue: 'SECCIÒN K'},
    {value: 'seccion l', viewValue: 'SECCIÒN L'},
    {value: 'seccion m', viewValue: 'SECCIÒN M'},
    {value: 'seccion n', viewValue: 'SECCIÒN N'},

  ];

  estadoValue: estado[] = [
    {value: 'disponible', viewValue: 'DISPONIBLE'},
    {value: 'vencido', viewValue: 'VENCIDO'},
    {value: 'prestado', viewValue: 'PRESTADO'}
  ];


}
