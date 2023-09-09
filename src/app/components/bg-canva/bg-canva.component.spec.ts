import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCanvaComponent } from './bg-canva.component';

describe('BgCanvaComponent', () => {
  let component: BgCanvaComponent;
  let fixture: ComponentFixture<BgCanvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgCanvaComponent]
    });
    fixture = TestBed.createComponent(BgCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
