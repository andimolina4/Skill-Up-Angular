import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGastosComponent } from './edit-gastos.component';

describe('EditGastosComponent', () => {
  let component: EditGastosComponent;
  let fixture: ComponentFixture<EditGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGastosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
