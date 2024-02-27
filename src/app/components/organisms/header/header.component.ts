import { Component, NgModule } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { AnchorComponent } from '../../atoms/anchor/anchor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, AnchorComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
