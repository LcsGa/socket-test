import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ColorsGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('color')
  handleColorChange(@MessageBody() color: string): void {
    this.server.emit('switchColor', color);
  }
}
