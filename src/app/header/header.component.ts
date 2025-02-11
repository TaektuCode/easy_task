import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // only needs to specify Angular version <19.xx
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
