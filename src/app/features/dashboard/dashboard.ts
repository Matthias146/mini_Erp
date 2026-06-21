import { Component, inject } from '@angular/core';
import { KpiCard } from '../../shared/ui/kpi-card/kpi-card';
import { AuthService } from '../../core/auth/auth.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly authService = inject(AuthService);
  private readonly dashboardService = inject(DashboardService);

  protected readonly currentUser = this.authService.currentUser;
  protected readonly kpis = this.dashboardService.getKpis();
}
