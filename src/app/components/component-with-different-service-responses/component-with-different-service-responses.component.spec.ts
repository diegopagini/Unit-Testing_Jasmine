import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Character } from 'src/app/models/characters.interface';
import { HttpService } from 'src/app/services/http.service';
import { ComponentWithDifferentServiceResponsesComponent } from './component-with-different-service-responses.component';

describe('ComponentWithDifferentServiceResponsesComponent', () => {
  let component: ComponentWithDifferentServiceResponsesComponent;
  let fixture: ComponentFixture<ComponentWithDifferentServiceResponsesComponent>;
  const luck: Character = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/6/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/7/',
    ],
    species: ['https://swapi.dev/api/species/1/'],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };
  const c3po: Character = {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.dev/api/people/2/',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ComponentWithDifferentServiceResponsesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      ComponentWithDifferentServiceResponsesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getStarWarsCharacter(?) and get Luke', (done: DoneFn) => {
    const httpService = fixture.debugElement.injector.get(HttpService);
    fixture.detectChanges();
    spyOn(httpService, 'getStarWarsCharacter').and.returnValue(of(luck));
    httpService.getStarWarsCharacter(1).subscribe((character: Character) => {
      done();
      expect(character).toEqual(luck);
    });
  });

  it('should call the getStarWarsCharacter(?) and get C-3P0', (done: DoneFn) => {
    const httpService = fixture.debugElement.injector.get(HttpService);
    fixture.detectChanges();
    spyOn(httpService, 'getStarWarsCharacter').and.returnValue(of(c3po));
    httpService.getStarWarsCharacter(2).subscribe((character: Character) => {
      done();
      expect(character).toEqual(c3po);
    });
  });
});