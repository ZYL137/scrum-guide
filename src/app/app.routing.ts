import { Route } from '@angular/router';
import { CoverComponent } from './cover/cover.component';

export const routes: Route[] = [
  {
    path: '',
    component: CoverComponent,
  },
  {
    path: 'introduction',
    component: CoverComponent,
  },
];
