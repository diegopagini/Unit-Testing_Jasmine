import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a textEmitter Output()', () => {
    spyOn(component, 'onText').and.stub();
    expect(component.textEmitter).toBeDefined();
    component.onText('test');
    expect(component.onText).toHaveBeenCalled();
    expect(component.onText).toHaveBeenCalledWith('test');
    expect(component.onText).toHaveBeenCalledTimes(1);
  });

  it('should emit the value passed in onText()', () => {
    spyOn(component.textEmitter, 'emit');
    component.onText('test');
    fixture.detectChanges();
    expect(component.textEmitter.emit).toHaveBeenCalled();
    expect(component.textEmitter.emit).toHaveBeenCalledWith('test');
  });
});
