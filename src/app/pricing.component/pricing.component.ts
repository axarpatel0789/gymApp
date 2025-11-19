import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  comparisonFeatures = [
    { name: 'Gym Access', basic: true, pro: true, premium: true },
    { name: 'Locker Room', basic: true, pro: true, premium: true },
    { name: 'Free WiFi', basic: true, pro: true, premium: true },
    { name: 'Group Classes', basic: false, pro: true, premium: true },
    { name: 'Personal Training', basic: false, pro: true, premium: true },
    { name: 'Nutrition Planning', basic: false, pro: true, premium: true },
    { name: 'Progress Tracking', basic: false, pro: true, premium: true },
    { name: 'Premium Supplements', basic: false, pro: false, premium: true },
    { name: 'Recovery Therapy', basic: false, pro: false, premium: true },
    { name: 'Priority Booking', basic: false, pro: false, premium: true }
  ];

  faqs = [
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes, you can cancel your membership at any time with a 30-day notice. No long-term contracts required for any of our plans.'
    },
    {
      question: 'Do you offer student or senior discounts?',
      answer: 'Absolutely! We offer 15% discounts for students and seniors with valid ID. Contact our membership team for more details.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, bank transfers, and also offer flexible payment plans for longer commitments.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 7-day free trial for new members. Experience all our facilities and classes before making a commitment.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle with pro-rated adjustments.'
    },
    {
      question: 'Are personal training sessions transferable?',
      answer: 'Personal training sessions are tied to your membership and cannot be transferred to another person, but you can reschedule them as needed.'
    }
  ];
}