import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Characters } from 'src/app/models/characters.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-component-with-service',
  templateUrl: './component-with-service.component.html',
  styleUrls: ['./component-with-service.component.scss'],
})
export class ComponentWithServiceComponent implements OnInit {
  characters$: Observable<Characters | any>;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.characters$ = this.httpService.getStarWarsCharacters();
  }

  changeResponse(): void {
    this.characters$ = this.httpService
      .getStarWarsCharacters()
      .pipe(map((characters: Characters) => ({ name: 'test' })));
  }
}
