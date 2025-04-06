import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EapComponent } from './eap.component';

describe('EapComponent', () => {
  let component: EapComponent;
  let fixture: ComponentFixture<EapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
