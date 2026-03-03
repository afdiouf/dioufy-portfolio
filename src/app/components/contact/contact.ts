import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contacts = [
    { icon: '✉️', label: 'Email', value: 'afdiouf@gmail.com', href: 'mailto:afdiouf@gmail.com' },
    { icon: '📞', label: 'Téléphone FR', value: '07 72 28 16 75', href: 'tel:+33772281675' },
    { icon: '📞', label: 'Téléphone SN', value: '78 597 15 38', href: 'tel:+221785971538' },
    { icon: '💼', label: 'LinkedIn', value: 'Al Hamdou Fassar DIOUF', href: 'https://www.linkedin.com/in/al-hamdou-fassar-diouf-940167152/' },
    { icon: '📍', label: 'Localisation', value: 'Juvisy-sur-Orge, France', href: null },
  ];
}
