import { Route } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SprintComponent } from './sprint/sprint.component';

export const routes: Route[] = [
  {
    path: '',
    component: CoverComponent,
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'sprint',
    component: SprintComponent,
  },
];
