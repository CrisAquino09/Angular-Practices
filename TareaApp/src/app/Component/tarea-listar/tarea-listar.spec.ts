import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaListar } from './tarea-listar';

describe('TareaListar', () => {
  let component: TareaListar;
  let fixture: ComponentFixture<TareaListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
