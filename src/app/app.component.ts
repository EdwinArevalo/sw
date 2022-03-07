import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cs: ConnectionService){

  }


  status!: boolean; 

  ngOnInit(): void {
    this.cs.test()
      .subscribe(
        res => { this.status = true; },
        err => { console.log(err); this.status = false; }
      )
    
  }

  title = 'swtest';
}
