import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,Validators, FormControl, FormGroup} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


interface seccionBodega {
  value: string;
  viewValue: string;
}

interface mes {
  value: string;
  viewValue: string;
}

interface estado{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.component.html',
  styleUrls: ['./agregar-inventario.component.scss'],
})
export class AgregarInventarioComponent implements OnInit {

  @Input() seccion;
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
      seccionInBodega : new FormControl ('',[Validators.required]),
      posicionInBodega : new FormControl ('',[Validators.required]),
      estado : new FormControl ('disponible'),
      nameOfProduct : new FormControl ('',[Validators.required]),
      pdrPID : new FormControl ('',[Validators.required]),
      serial : new FormControl ('',[Validators.required]),
      observacion : new FormControl ('')
    });

    console.log(this.seccion);
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
    {value: 'SECCIÒN A', viewValue: 'SECCIÒN A'},
    {value: 'SECCIÒN B', viewValue: 'SECCIÒN B'},
    {value: 'SECCIÒN C', viewValue: 'SECCIÒN C'},
    {value: 'SECCIÒN D', viewValue: 'SECCIÒN D'},
    {value: 'SECCIÒN E', viewValue: 'SECCIÒN E'},
    {value: 'SECCIÒN F', viewValue: 'SECCIÒN F'},
    {value: 'SECCIÒN G', viewValue: 'SECCIÒN G'},
    {value: 'SECCIÒN H', viewValue: 'SECCIÒN H'},
    {value: 'SECCIÒN I', viewValue: 'SECCIÒN I'},
    {value: 'SECCIÒN J', viewValue: 'SECCIÒN J'},
    {value: 'SECCIÒN K', viewValue: 'SECCIÒN K'},
    {value: 'SECCIÒN L', viewValue: 'SECCIÒN L'},
    {value: 'SECCIÒN M', viewValue: 'SECCIÒN M'},
    {value: 'SECCIÒN N', viewValue: 'SECCIÒN N'},

  ];

  estadoValue: estado[] = [
    {value: 'disponible', viewValue: 'DISPONIBLE'}
  ];

  meses: mes[] = [
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