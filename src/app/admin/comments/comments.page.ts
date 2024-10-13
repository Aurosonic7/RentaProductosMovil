import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ListAdminComponent } from 'src/app/components/list-admin/list-admin.component';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
  standalone: true,
  imports: [IonicModule, ListAdminComponent,HeaderComponent,CommonModule, FormsModule]
})
export class CommentsPage implements OnInit {

  adminItems = [
    { label: 'Comentario 1', icon: '../../../assets/comments.svg', route: '/admin/users' },
    { label: 'Comentario 2', icon: '../../../assets/comments.svg', route: '/admin/posts' },
    { label: 'Comentario 3', icon: '../../../assets/comments.svg', route: '/admin/comments' },
    { label: 'Comentario 4', icon: '../../../assets/comments.svg', route: '/admin/categories' },
  ];

  constructor(private router: Router) {
    addIcons({arrowBackOutline})
   }

  ngOnInit() {
  }

  goAdminMain(){
    this.router.navigate(['/admin/main']);
  }

}
