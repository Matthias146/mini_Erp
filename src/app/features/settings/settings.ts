import { Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-settings',
  imports: [MatButtonToggleModule, MatSlideToggleModule, MatCardModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected readonly language = signal<'de' | 'en'>('de');
  protected readonly notificationsEnabled = signal(true);
  protected readonly darkModeEnabled = signal(false);
}
