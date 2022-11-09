import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPerfilDetailComponent } from './usuario-perfil-detail.component';

describe('UsuarioPerfilDetailComponent', () => {
  let component: UsuarioPerfilDetailComponent;
  let fixture: ComponentFixture<UsuarioPerfilDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPerfilDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioPerfilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
