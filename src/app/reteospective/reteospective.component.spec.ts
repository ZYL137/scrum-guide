import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReteospectiveComponent } from './reteospective.component';

describe('ReteospectiveComponent', () => {
  let component: ReteospectiveComponent;
  let fixture: ComponentFixture<ReteospectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReteospectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReteospectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
