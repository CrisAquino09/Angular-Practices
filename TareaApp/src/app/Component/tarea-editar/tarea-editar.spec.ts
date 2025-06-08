import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaEditar } from './tarea-editar';

describe('TareaEditar', () => {
  let component: TareaEditar;
  let fixture: ComponentFixture<TareaEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
