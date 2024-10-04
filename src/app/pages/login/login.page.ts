import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCol, IonList, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToggle, IonToolbar, IonGrid, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { discOutline, eye, lockClosed, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonCol,
    IonRow,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonInput,
    IonIcon,
    IonToggle,
    IonButton,
    IonList,
    IonButton,
    IonToolbar, 
    CommonModule, 
    FormsModule
  ]
})
export class LoginPage implements OnInit {

  // Cambiar 'value' a 'segmentValue' para coincidir con la plantilla
  segmentValue: string = 'Login'; 

  constructor() { 
    addIcons({ eye, lockClosed, mailOutline, discOutline });
  }

  ngOnInit() {
  }

  setLogin() { this.segmentValue = 'Login'; }
  
  setRegister() { this.segmentValue = 'Register'; }

}