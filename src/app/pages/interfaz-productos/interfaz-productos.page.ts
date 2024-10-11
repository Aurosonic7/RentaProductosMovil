import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonCard,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonImg,
  IonCardContent, IonChip } from '@ionic/angular/standalone';

@Component({
  selector: 'app-interfaz-productos',
  templateUrl: './interfaz-productos.page.html',
  styleUrls: ['./interfaz-productos.page.scss'],
  standalone: true,
  imports: [IonChip,
    IonCardContent,
    IonImg,
    IonButton,
    IonIcon,
    IonLabel,
    IonItem,
    IonCard,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule, HeaderComponent],
})
export class InterfazProductosPage implements OnInit {
  constructor() {
    addIcons({heart,heartOutline});
  }

  ngOnInit() {}
}
