import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  categories = [
    {
      icon: '☕',
      title: 'Backend',
      skills: ['Java 17', 'Spring Boot 3', 'JPA / Hibernate', 'JUnit / PowerMockito', 'Maven', 'REST API', 'Microservices', 'Kafka']
    },
    {
      icon: '🖥️',
      title: 'Frontend',
      skills: ['Angular 16', 'AngularJS', 'TypeScript', 'JavaScript', 'Bootstrap', 'HTML / SCSS']
    },
    {
      icon: '🗄️',
      title: 'Bases de données',
      skills: ['Oracle', 'PostgreSQL', 'MySQL', 'SQL (optimisation)']
    },
    {
      icon: '🚀',
      title: 'DevOps & Outils',
      skills: ['Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'GitLab', 'Git', 'SonarQube', 'Datadog', 'Control-M', 'Tomcat', 'Vault', 'FluxCD']
    },
    {
      icon: '📋',
      title: 'Méthodes & Certifs',
      skills: ['Agile SAFe', 'JIRA', 'SAFe® 5 Practitioner', 'Scrum', 'CI/CD']
    }
  ];
}
