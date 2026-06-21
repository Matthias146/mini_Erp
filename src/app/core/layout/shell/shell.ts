import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-shell',
  imports: [Header, Sidebar, RouterOutlet, MatSidenavModule],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
