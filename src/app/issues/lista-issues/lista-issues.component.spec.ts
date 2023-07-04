import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIssuesComponent } from './lista-issues.component';

describe('ListaIssuesComponent', () => {
  let component: ListaIssuesComponent;
  let fixture: ComponentFixture<ListaIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
