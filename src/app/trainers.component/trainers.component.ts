import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent {
  activeFilter: string = 'all';
  
  trainers = [
    {
      name: 'Marcus Johnson',
      title: 'Head Strength Coach',
      image: 'https://images.pexels.com/photos/6551126/pexels-photo-6551126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specializations: ['Strength Training', 'Bodybuilding', 'Powerlifting'],
      bio: 'Former competitive bodybuilder with 12 years of coaching experience. Specialized in strength and muscle building.',
      experience: 12,
      clients: 350,
      successRate: 95,
      rating: 4.9,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Chen',
      title: 'Cardio & Fitness Specialist',
      image: 'https://images.pexels.com/photos/4498238/pexels-photo-4498238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specializations: ['HIIT', 'Cardio', 'Weight Loss'],
      bio: 'Certified personal trainer with expertise in cardiovascular fitness and high-intensity interval training.',
      experience: 8,
      clients: 280,
      successRate: 92,
      rating: 4.8,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'David Rodriguez',
      title: 'Yoga & Mindfulness Instructor',
      image: 'https://images.pexels.com/photos/3822625/pexels-photo-3822625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specializations: ['Yoga', 'Meditation', 'Flexibility'],
      bio: '500-hour certified yoga instructor with background in physical therapy and mindfulness practices.',
      experience: 10,
      clients: 420,
      successRate: 98,
      rating: 4.9,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Jessica Williams',
      title: 'Nutrition & Wellness Coach',
      image: 'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specializations: ['Nutrition', 'Weight Management', 'Wellness'],
      bio: 'Registered dietitian and certified nutrition specialist with focus on sustainable weight loss and healthy living.',
      experience: 7,
      clients: 190,
      successRate: 94,
      rating: 4.7,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Mike Thompson',
      title: 'Functional Training Expert',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specializations: ['Functional Training', 'Rehabilitation', 'Mobility'],
      bio: 'Specialized in functional movement patterns and injury prevention. Former physical therapy assistant.',
      experience: 9,
      clients: 310,
      successRate: 96,
      rating: 4.8,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Emily Parker',
      title: 'Senior Fitness Coach',
      image: 'https://images.pexels.com/photos/4498238/pexels-photo-4498238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specializations: ['Senior Fitness', 'Low Impact', 'Balance'],
      bio: 'Dedicated to helping older adults maintain strength, mobility, and independence through safe exercise programs.',
      experience: 11,
      clients: 230,
      successRate: 97,
      rating: 4.9,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  certifications = [
    {
      icon: 'fas fa-award',
      name: 'NASM Certified',
      organization: 'National Academy of Sports Medicine'
    },
    {
      icon: 'fas fa-dumbbell',
      name: 'ACE Certified',
      organization: 'American Council on Exercise'
    },
    {
      icon: 'fas fa-heartbeat',
      name: 'CPR/AED Certified',
      organization: 'American Red Cross'
    },
    {
      icon: 'fas fa-user-graduate',
      name: 'Degree in Kinesiology',
      organization: 'Various Universities'
    }
  ];

  // Get filtered trainers based on active filter
  get filteredTrainers() {
    if (this.activeFilter === 'all') {
      return this.trainers;
    }
    return this.trainers.filter(trainer => 
      trainer.specializations.some(spec => 
        spec.toLowerCase().includes(this.activeFilter.toLowerCase())
      )
    );
  }

  // Set active filter
  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }
}