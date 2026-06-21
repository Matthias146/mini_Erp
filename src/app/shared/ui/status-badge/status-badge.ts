import { Component, input } from '@angular/core';

export type StatusBadgeVariant = 'info' | 'success' | 'warning';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  readonly label = input.required<string>();
  readonly variant = input<StatusBadgeVariant>('info');
}
