import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideogameService } from '../videogame.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string;
  title = 'FileVideo';
  obsVideo: Observable<Object>;
  results: any;


  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public video: VideogameService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsVideo = this.video.searchVideo(this.query);
    this.obsVideo.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.video && res.video.items) {
      this.results = res.video.items;
    }
  }


}
