import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFoundsComponent } from './send-founds.component';

describe('SendFoundsComponent', () => {
  let component: SendFoundsComponent;
  let fixture: ComponentFixture<SendFoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendFoundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendFoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
