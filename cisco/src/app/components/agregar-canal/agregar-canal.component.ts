import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormControl, FormGroup} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-canal',
  templateUrl: './agregar-canal.component.html',
  styleUrls: ['./agregar-canal.component.scss'],
})
export class AgregarCanalComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private modalCtrl: ModalController,public alertController: AlertController) { }

  ngOnInit() {
    this.contactForm = this.fb.group ({
      canal : new FormControl ('', [Validators.required])
    });

  }

  regresar (){
    this.modalCtrl.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Se ha añadido el nuevo canal con èxito!',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  

  onSubmit () {
    console.log(this.contactForm.value);
    return this.regresar()
  }

  get canal(){ return this.contactForm.get('canal');}

}
