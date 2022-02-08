import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getStarWarsCharacters(): Observable<Characters> {
    return this.http.get<Characters>(`https://swapi.dev/api/people`);
  }
}
