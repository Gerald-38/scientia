import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDisplayComponent } from './global-display.component';

describe('GlobalDisplayComponent', () => {
  let component: GlobalDisplayComponent;
  let fixture: ComponentFixture<GlobalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
