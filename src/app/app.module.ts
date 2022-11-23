import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { CoverComponent } from './cover/cover.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [AppComponent, CoverComponent, IntroductionComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
