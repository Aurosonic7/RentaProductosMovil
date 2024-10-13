import { DatetimeChangeEventDetail } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonThumbnail, IonSelect, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonLabel, IonIcon, IonButton, IonSelectOption, IonDatetime } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-modal-calendario',
  templateUrl: './modal-calendario.component.html',
  styleUrls: ['./modal-calendario.component.scss'],
  standalone: true,
  imports: [IonDatetime, IonSelectOption,IonSelect,IonThumbnail,IonButton, IonIcon, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ModalCalendarioComponent implements OnInit {
  selectedDates: { start: string | null; end: string | null } = {
    start: null,
    end: null,
  };

  constructor() {}

  // Método para abrir el ion-datetime
  openDateTime() {
    const datePicker: any = document.querySelector('#date-picker');
    datePicker.isOpen = true;
  }

  // Manejar las fechas seleccionadas y cerrar el calendario
  onDatesSelected(event: CustomEvent<DatetimeChangeEventDetail>) {
    const dates = event.detail.value;
    if (Array.isArray(dates) && dates.length === 2) {
      this.selectedDates.start = dates[0];
      this.selectedDates.end = dates[1];

      // Cerrar el calendario
      const datePicker: any = document.querySelector('#date-picker');
      datePicker.isOpen = false;
    }
  }
  ngOnInit() {}
}
