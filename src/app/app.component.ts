import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private websocketService: WebsocketService) {
    // Connecte le service WebSocket au serveur
    this.websocketService.connect('ws://localhost:8080');
  }

  // Méthode pour envoyer un message
  sendMessage() {
    this.websocketService.sendMessage('Bonjour depuis Angular !');
  }
}
