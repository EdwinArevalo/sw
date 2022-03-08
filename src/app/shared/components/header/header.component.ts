import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConnectionService } from 'src/app/services/connection.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    MessageService
  ]
})
export class HeaderComponent implements OnInit {

  status!: boolean; 

  constructor(
    private dbService: DatabaseService,
    private cs: ConnectionService, 
    private ms: MessageService
    ) { }

  ngOnInit(): void {

    this.cs.test()
        .subscribe(
          res => { this.status = true; },
          err => {  this.status = false; }
        ) 
  }

}
