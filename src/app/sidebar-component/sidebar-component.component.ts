import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponent implements OnInit {
  selectedItems: string[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    // Suscribirse al Subject para recibir actualizaciones
    this.sidebarService
      .getSelectedItemsSubject()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items) => {
        this.selectedItems = items;
        console.log('Datos obtenidos del servicio:', this.selectedItems);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onContentSelect(item: string) {
    this.selectedItems.unshift(item);
    this.sidebarService.setSelectedItems(this.selectedItems);
    console.log('Datos enviados al servicio:', this.selectedItems);
  }
}
