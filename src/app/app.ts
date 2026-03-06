import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <a href="#hero" class="skip-link">Aller au contenu principal</a>
    <app-navbar />
    <main id="main-content">
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    .skip-link {
      position: absolute;
      top: -100%;
      left: 1rem;
      background: var(--accent);
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 0 0 8px 8px;
      font-weight: 600;
      z-index: 9999;
      transition: top 0.2s;
    }
    .skip-link:focus { top: 0; }
  `]
})
export class AppComponent {}
