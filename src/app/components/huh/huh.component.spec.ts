import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuhComponent } from './huh.component';

describe('HuhComponent', () => {
  let component: HuhComponent;
  let fixture: ComponentFixture<HuhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
