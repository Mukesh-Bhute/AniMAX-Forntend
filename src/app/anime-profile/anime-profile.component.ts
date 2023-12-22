import { Component ,OnInit} from '@angular/core';
import {AnimeInterface} from '../model/animeInterface';
import {AnimeService} from '../anime.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-anime-profile',
  templateUrl: './anime-profile.component.html',
  styleUrls: ['./anime-profile.component.css']
})
export class AnimeProfileComponent implements OnInit{

  anime!: AnimeInterface;
  animeSubscription!: Subscription ;
    
      constructor(private route: ActivatedRoute,
                  private animeService: AnimeService,
                  private location: Location) { }
    
      ngOnInit(): void {
        this.getAnime();
      }
    
  // store the comments        
      addComment(comment: string): void {
        if (comment) {
          this.anime.comments.push(comment);
        }
      }
      
  // fetch the anime profile using a service
      getAnime(): void { const idParam = this.route.snapshot.paramMap.get('id');

      if (idParam !== null) {
        const id = +idParam;
        console.log(id);
    
        this.animeSubscription = this.animeService.getAnime(id)
          .subscribe(anime => this.anime = anime);
      } else {
        // Handle the case when 'id' is null (e.g., redirect, show an error, etc.)
        console.error("ID parameter is null");
      }
      }
    
      goBack(): void {
        this.location.back();
      }
    

}
