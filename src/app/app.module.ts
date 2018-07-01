//base imports from angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//getting the configuration
import { AppConfig } from './config/app.config';

//getting all the components needed to run
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanComponent } from './hangman/hangman.component';
import { GameOverComponent } from './views/gameover.component';
import { FailedComponent } from './views/failed.component';
import { ValidComponent } from './views/valid.component';

//preload configuration data
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
            //initializers needed for
            //configuration preloading
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppConfig], multi: true
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
