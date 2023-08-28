import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidebarService } from '../sidebar-service.service'; // Importa SidebarService

@Component({
  selector: 'app-content-item-component',
  templateUrl: './content-item-component.component.html',
  styleUrls: ['./content-item-component.component.css']
})
export class ContentItemComponent implements OnInit {
  @Input() items: any[] = [];
  selectedItems: string[] = [];

  constructor(
    private http: HttpClient,
    private sidebarService: SidebarService // Inyecta SidebarService
  ) {}

  ngOnInit() {
    // Cargar el archivo JSON desde la carpeta "assets"
    this.http.get<any[]>('assets/data.json').subscribe((data) => {
      this.items = data;
      console.log(this.items);
    });
  }

  onItemClick(title: string) {
    const index = this.selectedItems.indexOf(title);

    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }

    this.selectedItems.unshift(title);
    console.log('Contenidos seleccionados:', this.selectedItems);

    // Actualiza la lista de elementos seleccionados en el servicio
    this.sidebarService.setSelectedItems(this.selectedItems);
  }
}
