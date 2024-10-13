import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonImg, IonIcon, IonCardContent, IonLabel, IonChip, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-interfaz-ver-producto',
  templateUrl: './interfaz-ver-producto.page.html',
  styleUrls: ['./interfaz-ver-producto.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonChip, IonLabel, IonCardContent, IonIcon, IonImg, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class InterfazVerProductoPage implements OnInit {

  constructor() { 
    addIcons({ heart, heartOutline });
  }

  ngOnInit() {
  }

}
