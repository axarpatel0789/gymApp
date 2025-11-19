import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProgramsComponent } from './programs/programs.component';
import { TrainersComponent } from './trainers.component/trainers.component';
import { PricingComponent } from './pricing.component/pricing.component';
import { ContactComponent } from './contact.component/contact.component';


export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'programs', component: ProgramsComponent },
	{ path: 'trainers', component: TrainersComponent },
	{ path: 'pricing', component: PricingComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', component: NotFoundComponent }
];
