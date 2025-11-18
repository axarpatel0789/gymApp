import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  hero = 'https://images.unsplash.com/photo-1558611848-73f7eb4001d0?w=900&q=80&auto=format&fit=crop';
  readonly placeholder = 'https://via.placeholder.com/900x600?text=Gym+Image';

  onImgError(): void {
    this.hero = this.placeholder;
  }
}
