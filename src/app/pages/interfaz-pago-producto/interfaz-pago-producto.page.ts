import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonThumbnail, IonSelect, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonLabel, IonIcon, IonButton, IonSelectOption, IonDatetime } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { ModalController} from '@ionic/angular';
import { calendar, calendarOutline, card, carOutline, cardOutline } from 'ionicons/icons';
import { ModalCalendarioComponent } from 'src/app/components/modal-calendario/modal-calendario.component';

@Component({
  selector: 'app-interfaz-pago-producto',
  templateUrl: './interfaz-pago-producto.page.html',
  styleUrls: ['./interfaz-pago-producto.page.scss'],
  standalone: true,
  providers: [ModalController],
  imports: [IonDatetime, IonSelectOption,IonSelect,IonThumbnail,IonButton, IonIcon, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class InterfazPagoProductoPage implements OnInit {
selectedDates: any;

  constructor( private modalCtrl : ModalController ){ 
    addIcons({calendarOutline,cardOutline,carOutline});
  }

  async OpenCalendario() {
    const modal = await this.modalCtrl.create({
      component: ModalCalendarioComponent,
      initialBreakpoint: .5,
      animated: true,
    });

    return await modal.present();
  }

  ngOnInit() {
  }

}
