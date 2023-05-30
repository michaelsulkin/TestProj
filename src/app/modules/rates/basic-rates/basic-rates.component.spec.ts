import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRatesComponent } from './basic-rates.component';

describe('BasicRatesComponent', () => {
  let component: BasicRatesComponent;
  let fixture: ComponentFixture<BasicRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
