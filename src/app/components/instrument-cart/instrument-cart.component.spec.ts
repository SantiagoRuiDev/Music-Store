import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentCartComponent } from './instrument-cart.component';

describe('InstrumentCartComponent', () => {
  let component: InstrumentCartComponent;
  let fixture: ComponentFixture<InstrumentCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrumentCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrumentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
