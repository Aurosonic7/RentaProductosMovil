import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelectOption,IonSelect,IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput, IonTextarea, IonCheckbox, IonButton, IonIcon, IonNote, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { imageOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-interfaz-publicacion',
  templateUrl: './interfaz-publicacion.page.html',
  styleUrls: ['./interfaz-publicacion.page.scss'],
  standalone: true,
  imports: [IonList, IonSelectOption,IonSelect,IonNote, IonIcon, IonButton, IonCheckbox, IonTextarea, IonInput, IonLabel, IonItem, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class InterfazPublicacionPage implements OnInit {

  constructor() { 
    addIcons({imageOutline});
  }

  ngOnInit() {
  }

}
