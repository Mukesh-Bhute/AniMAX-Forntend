import { Injectable } from '@angular/core';
import {AnimeInterface} from './model/animeInterface';
import {ANIME} from '../db-data';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  

  getAnime(id: number): Observable<AnimeInterface> {
    const foundAnime = ANIME.find(anime => anime.id === id + 1);

    if (foundAnime) {
      return of(foundAnime);
    } else {
      // Handle the case where no anime with the given ID is found
      // You can return an empty object, throw an error, or handle it in another way.
      // For now, I'm returning an empty object for demonstration purposes.
      return of({} as AnimeInterface);
    }
  }
}
