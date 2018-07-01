import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//we just got one subpage, so we dont need to load
//more than one here...
import { HangmanComponent } from './hangman/hangman.component';

//default page routes
const routes: Routes = [
    { path: 'hangman', component: HangmanComponent },
    { path: '', redirectTo: 'hangman', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
