import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { arrowBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})


export class PerfilComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { 
    addIcons({arrowBackOutline})
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
