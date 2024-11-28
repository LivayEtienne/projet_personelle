import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket!: WebSocket;

  // Méthode pour établir la connexion
  connect(url: string) {
    // Vérification que l'on est dans le navigateur et non côté serveur
    if (typeof window !== 'undefined' && window.WebSocket) {
      this.socket = new WebSocket(url);

      // Quand la connexion est ouverte
      this.socket.onopen = () => {
        console.log('Connexion WebSocket établie.');
      };

      // Quand un message est reçu
      this.socket.onmessage = (event) => {
        console.log('Message reçu du serveur :', event.data);
      };

      // En cas d’erreur
      this.socket.onerror = (error) => {
        console.error('Erreur WebSocket :', error);
      };

      // Quand la connexion est fermée
      this.socket.onclose = () => {
        console.log('Connexion WebSocket fermée.');
      };
    } else {
      console.warn('WebSocket n\'est pas disponible dans cet environnement.');
    }
  }

  // Méthode pour envoyer un message
  sendMessage(message: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket n’est pas connecté.');
    }
  }
}
