import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecimentosCardComponent } from './conhecimentos-card.component';

describe('ConhecimentosCardComponent', () => {
  let component: ConhecimentosCardComponent;
  let fixture: ComponentFixture<ConhecimentosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConhecimentosCardComponent]
    });
    fixture = TestBed.createComponent(ConhecimentosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
