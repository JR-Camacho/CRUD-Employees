import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css']
})
export class MessageErrorComponent implements OnInit {
  @Input() message:string;

  close(){
    this.message = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
