import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  activeFilter: string = 'all';
  
  programs = [
    // Strength Programs (3)
    {
      title: 'Strength & Power Training',
      description: 'Build muscle mass and increase strength with our comprehensive weight training program.',
      image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Strength',
      duration: '12 Weeks',
      difficulty: 'Intermediate',
      features: [
        'Personalized workout plans',
        'Progress tracking',
        'Nutrition guidance',
        'Expert trainer support'
      ]
    },
    {
      title: 'Advanced Bodybuilding',
      description: 'Take your physique to the next level with our advanced bodybuilding program.',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Strength',
      duration: '16 Weeks',
      difficulty: 'Advanced',
      features: [
        'Advanced techniques',
        'Competition preparation',
        'One-on-one coaching',
        'Diet planning'
      ]
    },
    {
      title: 'Functional Strength',
      description: 'Improve everyday movements and build practical strength with functional training.',
      image: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Strength',
      duration: '8 Weeks',
      difficulty: 'Beginner',
      features: [
        'Real-world movements',
        'Core strength focus',
        'Injury prevention',
        'Balance training'
      ]
    },

    // Cardio Programs (3)
    {
      title: 'Cardio Blast Program',
      description: 'Improve cardiovascular health and burn calories with high-intensity cardio workouts.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Cardio',
      duration: '8 Weeks',
      difficulty: 'Beginner',
      features: [
        'HIIT workouts',
        'Fat burning focus',
        'Endurance building',
        'Flexible scheduling'
      ]
    },
    {
      title: 'Fat Loss Challenge',
      description: 'Lose weight effectively with our proven fat loss program combining diet and exercise.',
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Cardio',
      duration: '10 Weeks',
      difficulty: 'Intermediate',
      features: [
        'Calorie deficit plans',
        'Metabolic workouts',
        'Weekly assessments',
        'Community support'
      ]
    },
    {
      title: 'Endurance Marathon Training',
      description: 'Build incredible stamina and endurance for long-distance running and cardio activities.',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Cardio',
      duration: '14 Weeks',
      difficulty: 'Advanced',
      features: [
        'Long-distance training',
        'Pace building',
        'Recovery strategies',
        'Performance analytics'
      ]
    },

    // Yoga Programs (3)
    {
      title: 'Yoga & Flexibility',
      description: 'Enhance flexibility, reduce stress, and improve mental clarity with our yoga program.',
      image: 'https://images.pexels.com/photos/1812964/pexels-photo-1812964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Yoga',
      duration: '6 Weeks',
      difficulty: 'Beginner',
      features: [
        'Daily yoga sessions',
        'Breathing techniques',
        'Meditation practices',
        'Flexibility improvement'
      ]
    },
    {
      title: 'Mindful Meditation',
      description: 'Reduce stress and improve mental wellbeing with our meditation and mindfulness program.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Yoga',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      features: [
        'Guided meditation',
        'Stress management',
        'Sleep improvement',
        'Mindfulness practices'
      ]
    },
    {
      title: 'Advanced Yoga & Balance',
      description: 'Master advanced yoga poses and improve balance with our expert-led program.',
      image: 'https://images.pexels.com/photos/4325480/pexels-photo-4325480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Yoga',
      duration: '10 Weeks',
      difficulty: 'Intermediate',
      features: [
        'Advanced asanas',
        'Balance techniques',
        'Deep stretching',
        'Mental focus training'
      ]
    }
  ];

  programFeatures = [
    {
      icon: 'fas fa-dumbbell',
      title: 'Expert Training',
      description: 'Learn from certified trainers with years of experience in fitness industry.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Progress Tracking',
      description: 'Monitor your improvements with our advanced tracking and analytics system.'
    },
    {
      icon: 'fas fa-users',
      title: 'Community Support',
      description: 'Join a supportive community of fitness enthusiasts and achieve goals together.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Access',
      description: 'Access your workouts and track progress anywhere with our mobile app.'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Nutrition Plans',
      description: 'Get personalized diet plans that complement your workout routine.'
    },
    {
      icon: 'fas fa-award',
      title: 'Certified Programs',
      description: 'All our programs are scientifically designed and certified by fitness experts.'
    }
  ];

  // Get filtered programs based on active filter
  get filteredPrograms() {
    if (this.activeFilter === 'all') {
      return this.programs;
    }
    return this.programs.filter(program => program.category === this.activeFilter);
  }

  // Set active filter
  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }
}