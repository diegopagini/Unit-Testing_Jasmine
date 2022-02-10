import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentWithMethodsComponent } from './component-with-methods.component';

describe('ComponentWithMethodsComponent', () => {
  let component: ComponentWithMethodsComponent;
  let fixture: ComponentFixture<ComponentWithMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentWithMethodsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a text prop with value', () => {
    expect(component.text).toBeDefined();
    expect(component.text).toEqual('test');
  });

  it('should call the changeText() method and change text prop', () => {
    component.changeText('my text');
    expect(component.text).toEqual('my text');
  });

  it('should call the sum() method a return the sum of the two parameters', () => {
    const result = component.sum(1, 1);
    expect(result).toEqual(2);
  });

  it('should call the destructureEmoji() method and return a destructured array', () => {
    const value = component.destructureEmoji('👨‍👩‍👧');
    expect(value).toEqual(['👨', '‍', '👩', '‍', '👧']);
  });
});
