import { Component, inject } from '@angular/core';
import { OrdersService } from './orders.service';
import { Order, ORDER_STATUS_CONFIG, OrderStatus } from './orders.model';
import { DatePipe } from '@angular/common';
import { StatusBadge, StatusBadgeVariant } from '../../shared/ui/status-badge/status-badge';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  imports: [DatePipe, MatTableModule, StatusBadge],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  private readonly ordersService = inject(OrdersService);

  protected readonly dataSource = new MatTableDataSource<Order>(this.ordersService.getOrders());
  protected readonly displayedColumns = ['orderNumber', 'customer', 'status', 'date'];

  protected getStatusLabel(status: OrderStatus): string {
    return ORDER_STATUS_CONFIG[status].label;
  }

  protected getStatusVariant(status: OrderStatus): StatusBadgeVariant {
    return ORDER_STATUS_CONFIG[status].variant;
  }
}
