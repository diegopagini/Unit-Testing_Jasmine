import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Characters } from 'src/app/models/characters.interface';
import { HttpService } from 'src/app/services/http.service';
import { RESPONSE_SAMPLE } from 'src/app/services/http.service.spec';
import { ComponentWithServiceComponent } from './component-with-service.component';

@Injectable()
class MockHttpService extends HttpService {
  override getStarWarsCharacters() {
    return of(RESPONSE_SAMPLE);
  }
}

describe('ComponentWithServiceComponent', () => {
  let component: ComponentWithServiceComponent;
  let fixture: ComponentFixture<ComponentWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentWithServiceComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HttpService,
          useClass: MockHttpService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a characters$ prop with values from service', (done: DoneFn) => {
    component.characters$.subscribe((characters: Characters) => {
      done(); // done() is needed to finalize the observable.
      expect(characters).toEqual(RESPONSE_SAMPLE);
    });
  });

  it('should call the changeResponse() method and change te value of characters$', (done: DoneFn) => {
    component.changeResponse();
    component.characters$.subscribe((value) => {
      done();
      expect(value).toEqual({ name: 'test' });
    });
  });
});
