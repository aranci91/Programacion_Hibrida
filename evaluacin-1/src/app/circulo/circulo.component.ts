import { Component, OnInit } from '@angular/core';
import { IonCard, IonItem, IonLabel, IonInput, IonButton, IonCardHeader, IonCardContent, IonImg, IonCardTitle } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class Circulo {
   constructor(public radio: number) {} 

   calcularPerimetro(): number { 
    return 2 * Math.PI * this.radio;
   }
  }

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonImg, IonCardContent, IonCardHeader, CommonModule, FormsModule, IonCard, IonItem, IonLabel,IonInput, IonButton]
})
export class CirculoComponent  implements OnInit {

  radio: number = 0; 
  perimetro: number | null = null;


  constructor() { }

  calcular() {
   
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
  }

  ngOnInit() {}

}
