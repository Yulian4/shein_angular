import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bolsos } from './bolsos';

describe('Bolsos', () => {
  let component: Bolsos;
  let fixture: ComponentFixture<Bolsos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bolsos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bolsos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
