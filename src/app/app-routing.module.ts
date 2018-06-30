import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangmanComponent } from './hangman/hangman.component';

const routes: Routes = [
    { path: 'hangman', component: HangmanComponent },
    { path: '', redirectTo: 'hangman', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
