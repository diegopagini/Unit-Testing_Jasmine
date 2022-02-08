import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a text Input()', () => {
    component.text = 'test';
    expect(component.text).toBeDefined();
    expect(component.text).toEqual('test');
  });

  it('should have a num Input()', () => {
    component.num = 10;
    expect(component.num).toBeDefined();
    expect(component.num).toBeInstanceOf(Number);
    expect(component.num).toBeGreaterThan(9);
    expect(component.num).toBeLessThanOrEqual(11);
  });
});
