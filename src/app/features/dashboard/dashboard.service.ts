import { Service } from '@angular/core';

export interface DashboardKpis {
  openOrders: number;
  shipmentsToday: number;
  warehouseUtilization: number;
}

@Service()
export class DashboardService {
  getKpis(): DashboardKpis {
    return {
      openOrders: 24,
      shipmentsToday: 8,
      warehouseUtilization: 76,
    };
  }
}
