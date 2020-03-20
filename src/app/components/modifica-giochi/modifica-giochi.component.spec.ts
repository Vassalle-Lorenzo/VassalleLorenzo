import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaGiochiComponent } from './modifica-giochi.component';

describe('ModificaGiochiComponent', () => {
  let component: ModificaGiochiComponent;
  let fixture: ComponentFixture<ModificaGiochiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaGiochiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaGiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
