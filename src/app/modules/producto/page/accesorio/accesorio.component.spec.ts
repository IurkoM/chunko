import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorioComponent } from './accesorio.component';

describe('AccesorioComponent', () => {
  let component: AccesorioComponent;
  let fixture: ComponentFixture<AccesorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesorioComponent]
    });
    fixture = TestBed.createComponent(AccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
