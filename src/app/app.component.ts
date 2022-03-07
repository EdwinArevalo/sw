import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ConnectionService } from './services/connection.service';
import { DatabaseService } from './services/database.service';
import { User } from './schemas/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    MessageService
  ]
})
export class AppComponent implements OnInit {

  constructor(
    private cs: ConnectionService, 
    private dbService: DatabaseService,
    private messageService: MessageService,
    ){

  }

  items! : MenuItem[];
  status!: boolean; 
  activeItem!: MenuItem;
  users: any[] = [];
  user: User = new User();

  ngOnInit(): void { 

      this.cs.test()
        .subscribe(
          res => { this.status = true; },
          err => { console.log(err); this.status = false; }
        ) 

      this.loadUserTable();

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
  }

  title = 'swtest';
  
  submit(){
    this.dbService.addUSer(this.user);
    this.user = new User();
    this.loadUserTable();
    this.messageService.add({key: 'tc', severity:'success', summary: 'Éxito', detail: 'Usuario agregado correctamente'});
  }

  loadUserTable(){
    this.users = [];

    this.dbService.getUsers()
        .then((res: any) => {
          res.rows.forEach(element => {
              this.users.push(element.doc);
          });
          console.log(this.users);
        });
  }

  sync(){
    setTimeout(() => {
      this.users = [];
      this.messageService.add({key: 'tc', severity:'success', summary: 'Éxito', detail: 'Sincronizado correctamente'});
    }, 1000);
  }
}
