import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmcComponent } from './pmc.component';

describe('PmcComponent', () => {
  let component: PmcComponent;
  let fixture: ComponentFixture<PmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
