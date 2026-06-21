import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../core/auth/auth.service';
import { UserRole } from '../../core/models/user.model';

const ROLE_LABELS: Record<UserRole, string> = {
  manager: 'Manager',
  employee: 'Mitarbeiter',
};

@Component({
  selector: 'app-profile',
  imports: [MatCardModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private readonly authService = inject(AuthService);

  protected readonly currentUser = this.authService.currentUser;
  protected readonly roleLabels = ROLE_LABELS;
}
