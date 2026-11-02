import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearApuestasComponent } from './crear-apuestas-component';

describe('CrearApuestasComponent', () => {
  let component: CrearApuestasComponent;
  let fixture: ComponentFixture<CrearApuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearApuestasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearApuestasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
