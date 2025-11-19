import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  faqs = [
    {
      question: 'What are your gym opening hours?',
      answer: 'Our gym is open Monday to Friday from 5:00 AM to 11:00 PM, Saturday from 6:00 AM to 10:00 PM, and Sunday from 7:00 AM to 9:00 PM.'
    },
    {
      question: 'Do you offer free trial sessions?',
      answer: 'Yes! We offer a 7-day free trial for new members. You can experience all our facilities, equipment, and group classes before committing to a membership.'
    },
    {
      question: 'What types of membership do you offer?',
      answer: 'We offer Basic, Pro, and Premium memberships with varying levels of access to facilities, classes, and personal training sessions. Visit our pricing page for detailed information.'
    },
    {
      question: 'Are personal trainers available?',
      answer: 'Yes, we have certified personal trainers available for one-on-one sessions. You can book sessions individually or as part of our Pro and Premium membership packages.'
    },
    {
      question: 'Do you have parking facilities?',
      answer: 'Yes, we have ample free parking available for all our members. The parking lot is secure and well-lit for evening visits.'
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel. Contact our membership team for assistance.'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      newsletter: [false]
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.contactForm) return;

    // If form invalid, mark all as touched so validation messages appear
    if (this.contactForm.invalid) {
      // Angular provides a convenience method on AbstractControl
      // to mark all controls as touched.
      (this.contactForm as any).markAllAsTouched?.();
      return;
    }

    // Prevent duplicate submissions and disable inputs while submitting
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    this.contactForm.disable();

    try {
      // Simulate an async API call
      await this.fakeSubmit(this.contactForm.value);

      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
      alert('Thank you for your message! We will get back to you within 24 hours.');
    } catch (err) {
      console.error('Failed to submit contact form', err);
      alert('Failed to send message — please try again later.');
    } finally {
      this.isSubmitting = false;
      this.contactForm.enable();
    }
  }

  // Simulated async submit (replace with real HTTP call)
  private fakeSubmit(_payload: unknown): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}