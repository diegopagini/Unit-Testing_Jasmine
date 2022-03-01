import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Character } from 'src/app/models/characters.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-component-with-different-service-responses',
  templateUrl: './component-with-different-service-responses.component.html',
  styleUrls: ['./component-with-different-service-responses.component.scss'],
})
export class ComponentWithDifferentServiceResponsesComponent implements OnInit {
  character$: Observable<Character>;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.character$ = this.httpService.getStarWarsCharacter(1).pipe(
      tap((character: Character) => {
        if (character.name === 'Luke Skywalker') alert('Luke');
        else if (character.name === 'C-3PO') alert('C-3PO');
        else alert('Other');
      })
    );
  }
}
