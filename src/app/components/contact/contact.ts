import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_c8qr1ri';
const EMAILJS_TEMPLATE_ID = 'template_a0fw1ah';
const EMAILJS_PUBLIC_KEY  = '_HBJypnmHoqu0sWf0';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contacts = [
    { icon: '✉️', label: 'Email', value: 'afdiouf@gmail.com', href: 'mailto:afdiouf@gmail.com' },
    { icon: '📞', label: 'Téléphone FR', value: '07 72 28 16 75', href: 'tel:+33772281675' },
    // { icon: '📞', label: 'Téléphone SN', value: '78 597 15 38', href: 'tel:+221785971538' },
    { icon: '💼', label: 'LinkedIn', value: 'Al Hamdou Fassar DIOUF', href: 'https://www.linkedin.com/in/al-hamdou-fassar-diouf-940167152/' },
    { icon: '📍', label: 'Localisation', value: 'Juvisy-sur-Orge, France', href: null },
  ];

  form = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  async send() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status = 'sending';
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  this.form.value.name,
          from_email: this.form.value.email,
          message:    this.form.value.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      this.status = 'success';
      this.form.reset();
    } catch {
      this.status = 'error';
    }
  }
}
