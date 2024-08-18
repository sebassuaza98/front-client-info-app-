import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentInputComponent } from './components/document-input/document-input.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  { path: 'document-input', component: DocumentInputComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: '/document-input', pathMatch: 'full' }, // Redirige a la página principal
  { path: '**', redirectTo: '/document-input' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
