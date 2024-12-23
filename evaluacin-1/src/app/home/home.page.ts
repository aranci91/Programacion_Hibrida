import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,CommonModule, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption, IonTitle, IonContent, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  figuraSeleccionada: string = '';

  constructor() {}

  ngOnInit() {
  }
  handleChange(event: any) {
     this.figuraSeleccionada = event.detail.value; 
    }

  
}
