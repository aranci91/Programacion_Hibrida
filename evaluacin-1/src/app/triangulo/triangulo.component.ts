import { Component, OnInit } from '@angular/core';
import { IonCard, IonItem, IonLabel, IonInput, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class Triangulo { 
  constructor(public ladoA: number, public ladoB: number, public ladoC: number) {}
 
  calcularPerimetro(): number { 
    return this.ladoA + this.ladoB + this.ladoC;
   } 
}

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCardHeader, IonCardTitle, IonCardContent, CommonModule, FormsModule, IonCard, IonInput, IonButton, IonItem, IonLabel]
})
export class TrianguloComponent  implements OnInit {
  ladoA: number = 0; 
  ladoB: number = 0; 
  ladoC: number = 0; 
  perimetro: number | null = null;

  constructor() { }

  calcular() { 
    const triangulo = new Triangulo(this.ladoA, this.ladoB, this.ladoC); 
    this.perimetro = triangulo.calcularPerimetro(); 
  }

  ngOnInit() {}

}
