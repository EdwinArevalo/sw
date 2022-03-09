import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/data/schemas/user/user.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [
    MessageService
  ]
})
export class NewComponent implements OnInit {

  user: User = new User();

  constructor(
    private dbService: DatabaseService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.dbService.addUSer(this.user);
    this.user = new User();
    this.messageService.add({key: 'tc', severity:'success', summary: 'Éxito', detail: 'Usuario agregado correctamente'});
  }

}
