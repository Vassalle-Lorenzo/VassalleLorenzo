import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGiochiComponent } from './lista-giochi.component';

describe('ListaGiochiComponent', () => {
  let component: ListaGiochiComponent;
  let fixture: ComponentFixture<ListaGiochiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGiochiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
