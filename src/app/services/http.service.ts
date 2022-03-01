import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, Characters } from '../models/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getStarWarsCharacters(): Observable<Characters> {
    return this.http.get<Characters>(`https://swapi.dev/api/people`);
  }

  getStarWarsCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`https://swapi.dev/api/people/${id}`);
  }
}
