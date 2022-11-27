import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { CoverComponent } from './cover/cover.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SprintComponent } from './sprint/sprint.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    IntroductionComponent,
    DialogueComponent,
    SprintComponent,
    CustomDialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DragDropModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
