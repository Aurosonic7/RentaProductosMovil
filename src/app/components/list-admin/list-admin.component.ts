import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ListAdminComponent  implements OnInit {
  @Input() adminItems: Array<{ label: string; icon: string; route: string }> = [];

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit() {}

}
