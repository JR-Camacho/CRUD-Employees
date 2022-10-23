import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-confirmation',
  templateUrl: './message-confirmation.component.html',
  styleUrls: ['./message-confirmation.component.css']
})
export class MessageConfirmationComponent implements OnInit {
  @Input() message:string;

  close(){
    this.message = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
