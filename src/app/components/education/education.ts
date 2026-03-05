import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  formations = [
    {
      degree: 'Formation DevOps',
      school: 'IB CEGOS',
      location: 'Paris',
      period: 'Nov. 2025',
      details: ['Docker', 'Kubernetes', 'Ansible', 'Orchestration de conteneurs'],
      type: 'formation'
    },
    {
      degree: 'Mastère Européen — Manager de Projets Informatiques',
      school: 'INEAD',
      location: 'Marseille, France',
      period: '2021 — 2022',
      details: ['Manager de Projets Informatiques'],
      type: 'master'
    },
    {
      degree: 'Licence Pro — Métiers des réseaux et télécommunications',
      school: 'Université de Toulon',
      location: 'France',
      period: '2019 — 2020',
      details: ['Administration et Sécurité des Réseaux'],
      type: 'licence'
    },
    {
      degree: 'Master 1 — Systèmes Informatiques et Logiciels',
      school: 'ESMTIC',
      location: 'Dakar, Sénégal',
      period: '2017 — 2018',
      details: ['Génie Logiciel'],
      type: 'master'
    }
  ];

  certifs = [
    {
      name: 'Certified SAFe® 5 Practitioner',
      org: 'Scaled Agile, Inc.',
      date: 'Sept. 2022',
      icon: '🏆'
    }
  ];
}
