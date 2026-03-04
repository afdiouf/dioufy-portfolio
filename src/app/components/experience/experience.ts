import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  description: string;
  tasks: string[];
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  current: boolean;
  projects: Project[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Consultant Java / Angular',
      company: 'BPI France — Filiale Assurance Export',
      logo: '/assets/logos/logo-bpifrance.png',
      location: 'Paris',
      period: 'Juin 2022 — Déc. 2025',
      current: false,
      projects: [
        {
          name: 'Projet REC — Rééchelonnement, consolidation et recouvrement de la dette',
          description: 'Rééchelonnement, Consolidation et Recouvrement de la Dette.',
          tasks: [
            'Maintenance corrective et évolutive sur les modules de RECORD et sur les batchs',
            'Développement de nouvelles fonctionnalités sur les modules de RECORD et sur les batchs',
            'Remplacement des appels SOAP par des appels REST',
            'Déploiement automatisé d\'un serveur RedHat 9 sur VM avec Ansible',
            'Correction des anomalies CVEs et optimisation SQL',
            'Monitoring Datadog, gestion des incidents de production',
            'Tests de non régression',
          ],
          tech: ['Java', 'EJB', 'Spring', 'GWT', 'Maven', 'JUnit', 'PowerMockito', 'Cucumber', 'Oracle', 'Jenkins', 'SonarQube', 'PostgreSQL', 'PowerDesigner', 'GitLab', 'Git', 'Ansible', 'Control-M', 'Datadog', 'Jira']
        },
        {
          name: 'Projet DEL — Demande d\'assurance-crédit en ligne',
          description: 'Demande d\'assurance-crédit en ligne.',
          tasks: [
            'Mise en place de la demande modificative et signature électronique',
            'Mise en place de la signature électronique des documents',
            'Migration Angular 12 → 16, Java 11 → 17, Spring 2 → 3',
            'Mise en place de tests unitaires JUnit et Jasmine',
            'Maintenance corrective et évolutive',
            'Monitoring Datadog, gestion des incidents de production',
            'Tests de non régression',
          ],
          tech: ['Java', 'Spring Boot', 'Angular', 'JPA', 'Hibernate', 'JUnit', 'Cucumber', 'PostgreSQL', 'PowerDesigner', 'Jasmine', 'Kafka', 'Kubernetes', 'Maven', 'Vault', 'Jenkins', 'FluxCD', 'SonarQube','GitLab', 'Git', 'Jira']
        },
        {
          name: 'Projet CTP — Calcul Taux de Primes',
          description: 'Calcul Taux de Primes.',
          tasks: [
            'Développement de nouvelles fonctionnalités métier sur le module de calcul',
            'Mises à jour des notations pays issues du Club de Paris',
            'Mises à jour de sécurité et correction d\'anomalies CVEs',
            'Monitoring Datadog, gestion des incidents de production',
            'Tests de non régression',
          ],
          tech: ['AngularJS', 'Cucumber', 'Jenkins', 'SonarQube', 'Vault', 'FluxCD', 'Kubernetes', 'Bootstrap','GitLab', 'Git', 'Jira']
        },
        {
          name: 'Projet LOS — Lettre de Soutien aux demandeurs',
          description: 'Lettre de Soutien aux demandeurs.',
          tasks: [
            'Développement de nouvelles fonctionnalités',
            'Migration Angular 12 → 16, Java 11 → 17, Spring 2 → 3',
            'Mise en place de tests unitaires JUnit',
            'Monitoring Datadog, gestion des incidents de production',
            'Tests de non régression',
          ],
          tech: ['Java', 'Spring Boot', 'Angular', 'JPA', 'Bootstrap', 'Cucumber', 'PostgreSQL', 'Jenkins', 'SonarQube', 'Vault', 'FluxCD', 'Kubernetes','GitLab', 'Git', 'Jira']
        }
      ]
    },
    {
      role: 'Stage — Développeur',
      company: 'WinMedia',
      logo: '/assets/logos/logo-winMedia.png',
      location: 'La Ciotat',
      period: 'Juil. 2020 — Oct. 2020',
      current: false,
      projects: [
        {
          name: 'Module d\'inscription et gestion client',
          description: 'Développement d\'une interface d\'abonnement et d\'un module back-office de gestion de nouveaux clients.',
          tasks: [
            'Ajout d\'une interface d\'inscription et d\'abonnement aux offres',
            'Développement d\'un module de procédure de gestion de nouveau client (back-office)',
            'Rédaction de documentation technique et formation utilisateurs',
          ],
          tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL', 'Git']
        }
      ]
    }
  ];

  activeProject: { [key: number]: number } = { 0: 0, 1: 0 };

  setProject(expIdx: number, projIdx: number) {
    this.activeProject[expIdx] = projIdx;
  }
}
