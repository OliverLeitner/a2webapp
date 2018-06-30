import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppConfig } from './config/app.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanComponent } from './hangman/hangman.component';
import { GameOverComponent } from './views/gameover.component';
import { FailedComponent } from './views/failed.component';
import { ValidComponent } from './views/valid.component';

export function initializeApp(appConfig: AppConfig) {
    return () => appConfig.load();
}
@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    GameOverComponent,
    FailedComponent,
    ValidComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
    providers: [
        AppConfig, {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppConfig], multi: true
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
