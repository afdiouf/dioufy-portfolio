import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-inner">
        <span class="logo">AF<span>D</span></span>
        <p>© 2025 Al Hamdou Fassar DIOUF — Développeur Full Stack Java | Spring Boot | Angular</p>
        <a href='https://www.linkedin.com/in/al-hamdou-fassar-diouf-940167152/' target="_blank">LinkedIn ↗</a>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem 0;
      background: var(--bg-card);
    }
    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .logo { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; span { color: var(--accent); } }
    p { font-size: 0.82rem; color: var(--text-muted); }
    a { font-size: 0.85rem; color: var(--accent); font-weight: 600; }
  `]
})
export class FooterComponent {}
