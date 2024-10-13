import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { eyeOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ListAdminComponent  implements OnInit {
  @Input() adminItems: Array<{ label: string; icon: string; route: string }> = [];
  showActionIcons: boolean = false;

  constructor(private router: Router) { 
    addIcons({eyeOutline, trashOutline})
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }


  ngOnInit() {
    this.showActionIcons = this.router.url === '/admin/users' || this.router.url === '/admin/posts' || this.router.url === '/admin/comments' || this.router.url === '/admin/categories';
  }

}
