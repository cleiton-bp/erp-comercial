import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextBlockComponentComponent } from './image-text-block-component.component';

describe('ImageTextBlockComponentComponent', () => {
  let component: ImageTextBlockComponentComponent;
  let fixture: ComponentFixture<ImageTextBlockComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTextBlockComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageTextBlockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
