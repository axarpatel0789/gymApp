import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProgramsComponent } from './programs/programs.component';
import { TrainersComponent } from './trainers.component/trainers.component';


export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'programs', component: ProgramsComponent },
	{ path: 'trainers', component: TrainersComponent },
	// { path: 'contact', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
];
