import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparsionComponent } from './comparsion.component';

describe('ComparsionComponent', () => {
  let component: ComparsionComponent;
  let fixture: ComponentFixture<ComparsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparsionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
