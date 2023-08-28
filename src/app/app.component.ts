import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deportes-1';
  items: any[] = []; // Agrega la declaración de la propiedad 'items'
}
