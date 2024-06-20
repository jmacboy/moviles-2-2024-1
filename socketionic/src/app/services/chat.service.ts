import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
import { ChatMessage } from '../models/ChatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }
  sendMessage(msg: ChatMessage) {
    this.socket.emit('chat message', msg);
  }
  getMessage() {
    return this.socket.fromEvent('chat message').pipe(map((data: any) => data));
  }

}
