import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSatusComponent } from './cart-satus.component';

describe('CartSatusComponent', () => {
  let component: CartSatusComponent;
  let fixture: ComponentFixture<CartSatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
