import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cs: ConnectionService){

  }

  items! : MenuItem[];
  status!: boolean; 
  activeItem!: MenuItem;
  users: any[] = [];

  ngOnInit(): void {
      this.cs.test()
        .subscribe(
          res => { this.status = true; },
          err => { console.log(err); this.status = false; }
        )
    
      this.items = [
        {
          label: 'Añadir',
          icon:'pi pi-fw pi-plus',
          command: () => {
            this.activeItem = this.items[0];
          }
        },
        {
          label: 'Listado',
          icon:'pi pi-fw pi-list',
          command: () => {
            this.activeItem = this.items[1];
          }
        },
      ]

      this.activeItem = this.items[0];

      this.users = [
        {
          "id": "1000",
          "name": "Blue Band",
          "description": "Product Description",
          "image": "blue-band.jpg",
          "category": "Fitness",
        },
        {
          "id": "1001",
          "name": "Blue Band",
          "description": "Product Description",
          "image": "blue-band.jpg",
          "category": "Fitness",
        },
        {
          "id": "1002",
          "name": "Blue Band",
          "description": "Product Description",
          "image": "blue-band.jpg",
          "category": "Fitness",
        },
      ]
  }

  title = 'swtest';
}
