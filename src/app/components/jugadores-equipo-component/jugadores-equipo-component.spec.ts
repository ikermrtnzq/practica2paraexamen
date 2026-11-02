import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadoresEquipoComponent } from './jugadores-equipo-component';

describe('JugadoresEquipoComponent', () => {
  let component: JugadoresEquipoComponent;
  let fixture: ComponentFixture<JugadoresEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugadoresEquipoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JugadoresEquipoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
