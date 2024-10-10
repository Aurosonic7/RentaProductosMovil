import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { IonImg, IonCard,IonCol, IonList, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToggle, IonToolbar, IonGrid, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { discOutline, eye, lockClosed, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonCard,
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

  constructor(private alertCtrl: AlertController) { 
    addIcons({ eye, lockClosed, mailOutline, discOutline });
  }

  ngOnInit() {
  }
  
  async login() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Información importante',
      message: 'Esta información es importante para nuestra APP',
      buttons: ['OK']
    });
    await alert.present();
  }

}