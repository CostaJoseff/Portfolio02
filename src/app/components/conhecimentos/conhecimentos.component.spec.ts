import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecimentosComponent } from './conhecimentos.component';

describe('ConhecimentosComponent', () => {
  let component: ConhecimentosComponent;
  let fixture: ComponentFixture<ConhecimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConhecimentosComponent]
    });
    fixture = TestBed.createComponent(ConhecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
