import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRepositoriosComponent } from './lista-repositorios.component';
import { AppModule } from 'src/app/app.module';
import * as moment from 'moment';

describe('ListaRepositoriosComponent', () => {
  let component: ListaRepositoriosComponent;
  let fixture: ComponentFixture<ListaRepositoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRepositoriosComponent ],
      imports: [AppModule],
      providers: [moment]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
