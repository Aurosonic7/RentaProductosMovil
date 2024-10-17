import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})


export class HeaderComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  async openProfileModal() {
    const modal = await this.modalCtrl.create({
      component: PerfilComponent, // El componente que representará el modal
    });
    return await modal.present();
  }

  ngOnInit() {}

}
