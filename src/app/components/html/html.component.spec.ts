import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HtmlComponent } from './html.component';

describe('HtmlComponent', () => {
  let component: HtmlComponent;
  let fixture: ComponentFixture<HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a <h1> tag with "Hola Mundo" text', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1).toBeDefined();
    expect(h1.innerHTML).toEqual('Hola Mundo');
  });

  it('should have a <p> tag and includes some text of Lorem', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(p).toBeTruthy();
    expect(p.innerHTML).toContain('ipsum');
  });

  it('should have a <input> tag and be of type "text"', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input).not.toBeFalsy();
    input.value = 'test';
    expect(input.value).toEqual('test');
  });
});
