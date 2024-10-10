import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonGrid, IonCol, IonRow, IonButton, IonSegment, IonSegmentButton, IonInput, IonIcon, IonItem, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cards-auth',
  templateUrl: './cards-auth.component.html',
  styleUrls: ['./cards-auth.component.scss'],
  standalone: true,
  imports: [ IonToggle, IonItem, IonIcon, IonInput, IonCard, IonGrid, IonCol, IonRow, IonButton, IonSegment, IonSegmentButton, FormsModule, CommonModule ]
})
export class CardsAuthComponent  implements OnInit {
  segmentValue: string = 'Login'; 
  constructor() { }

  ngOnInit() {}

}
