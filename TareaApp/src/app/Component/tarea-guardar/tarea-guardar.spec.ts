import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaGuardar } from './tarea-guardar';

describe('TareaGuardar', () => {
  let component: TareaGuardar;
  let fixture: ComponentFixture<TareaGuardar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaGuardar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaGuardar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
