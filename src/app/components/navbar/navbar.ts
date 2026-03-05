import { Component, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  scrolled = signal(false);
  menuOpen = signal(false);
  darkMode = signal(false);

  links = [
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Formation', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode.update(v => !v);
      document.documentElement.setAttribute(
        'data-theme',
        this.darkMode() ? 'dark' : 'light'
      );
    }
  }
}
