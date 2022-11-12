import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaldoComponent } from './edit-saldo.component';

describe('EditSaldoComponent', () => {
  let component: EditSaldoComponent;
  let fixture: ComponentFixture<EditSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaldoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
