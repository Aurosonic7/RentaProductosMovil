import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { discOutline, eye, lockClosed, mailOutline, scanOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit, AfterViewInit {

  @ViewChild('content', { static: false }) content!: ElementRef; // Cambia 'static' a 'false'
  showWelcomeImage = true; // Variable para controlar la visibilidad de la imagen
  segmentValue = 'Login'; // Valor inicial para el segmento
  isBackgroundHidden: boolean = false;

  constructor(private animationCtrl: AnimationController) { 
    addIcons({ eye, lockClosed, mailOutline, discOutline, scanOutline });
  }

  ngOnInit() {
    // Eliminar la llamada a presentPage aquí
  }

  ngAfterViewInit() {
    this.presentPage(); // Llama a presentPage aquí
  }
  
  async presentPage() {
    this.isBackgroundHidden = true; // Oculta el fondo al iniciar la animación
  
    if (!this.content) {
      console.error('Content is not defined');
      return;
    }
  
    // Animación de entrada de la página de login
    const animation = this.animationCtrl.create()
      .addElement(this.content.nativeElement)
      .duration(1000)
      .easing('ease-in-out')
      .fromTo('opacity', 0, 1)
      .fromTo('transform', 'translateY(100%)', 'translateY(0)');
  
    await animation.play(); // Ejecuta la animación
  
    // Simula una espera para permitir ver la imagen de bienvenida
    setTimeout(() => {
      this.isBackgroundHidden = false; // Muestra el fondo después de la animación
      this.showWelcomeImage = false; // Oculta la imagen de bienvenida
    }, 2000); // Ajusta este tiempo según sea necesario
  }
  

}
