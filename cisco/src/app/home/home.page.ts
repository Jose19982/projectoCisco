import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  open = false;
  openprestamo= false;
  openInicio= true;
  close= true;

  constructor() {}

    ngOnit(){

    }

    inicio(){
      this.openInicio = true;
      this.open = false;
      this.close = true;
      this.openprestamo= false;
    }

    mostrar (){
      this.open = true;
      this.openprestamo = false;
      this.close = false;
    }
  
    mostrarprestamo (){
      this.openprestamo = true;
      this.open = false;
      this.close = false;
    }

}
