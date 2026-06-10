import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nombreejemplo } from './nombreejemplo';

describe('Nombreejemplo', () => {
  let component: Nombreejemplo;
  let fixture: ComponentFixture<Nombreejemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nombreejemplo],
    }).compileComponents();

    fixture = TestBed.createComponent(Nombreejemplo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
