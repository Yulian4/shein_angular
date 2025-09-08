import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosList } from './accesorios-list';

describe('AccesoriosList', () => {
  let component: AccesoriosList;
  let fixture: ComponentFixture<AccesoriosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoriosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoriosList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
