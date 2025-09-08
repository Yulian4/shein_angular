import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsosList } from './bolsos-list';

describe('BolsosList', () => {
  let component: BolsosList;
  let fixture: ComponentFixture<BolsosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolsosList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
