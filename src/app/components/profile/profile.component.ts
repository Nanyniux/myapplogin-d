import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
//
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user: any;

  constructor(private service: ServiceService) {
    this.service.getUserData().subscribe((data) => {
      this.user = data;
    });
  }
}
