import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  chats: ChatMessage[] = [];
  msg: string = '';
  constructor(private socket: ChatService) { }
  ngOnInit() {
    this.socket.getMessage().subscribe((msg: ChatMessage) => {
      this.chats.push(msg);
    });
  }
  sendMsg() {
    this.socket.sendMessage({ name: 'Ionic client', msg: this.msg });
    this.msg = '';
  }
}
