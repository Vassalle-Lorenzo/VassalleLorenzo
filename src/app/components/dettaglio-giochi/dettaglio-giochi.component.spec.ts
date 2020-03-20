import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioGiochiComponent } from './dettaglio-giochi.component';

describe('DettaglioGiochiComponent', () => {
  let component: DettaglioGiochiComponent;
  let fixture: ComponentFixture<DettaglioGiochiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioGiochiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioGiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
