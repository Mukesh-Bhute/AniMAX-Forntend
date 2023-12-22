import { Component } from '@angular/core';
import {ANIME} from '../../db-data';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {

animes = ANIME;
}
