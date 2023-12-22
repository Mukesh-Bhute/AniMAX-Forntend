import { Component , Input} from '@angular/core';
import {AnimeInterface} from '../model/animeInterface';
@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent {
  
  
  
  @Input()
  anime: AnimeInterface = {
    id: 0,
    iconUrl: '',
    name: '',
    description: '',
    type: '',
    status: '',
    comments: [],
  };

  @Input()
  animeId: number =0;

}
