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
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: true,
  imports: [IonicModule, ListAdminComponent,HeaderComponent,CommonModule, FormsModule]
})


export class PostsPage implements OnInit {

  adminItems = [
    { label: 'Publicacion 1', icon: '../../../assets/newspaper.svg', route: '/admin/users' },
    { label: 'Publicacion 2', icon: '../../../assets/newspaper.svg', route: '/admin/posts' },
    { label: 'Publicacion 3', icon: '../../../assets/newspaper.svg', route: '/admin/comments' },
    { label: 'Publicacion 4', icon: '../../../assets/newspaper.svg', route: '/admin/categories' },
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
