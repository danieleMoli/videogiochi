import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { VideogameService } from '../videogame.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.css']
})


export class SearchVideoComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  video: any; //Qui salverò la traccia selezionata
  videoServiceObs: any;
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VideogameService,
    private location: Location) { }
 ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let video_nameId = params.get('id'); //Ottengo l'id dai parametri
    console.log(video_nameId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.videoServiceObs = this.service.getVideo(video_nameId);
    this.videoServiceObs.subscribe(this.getData)
  }
 getData = (data) => {

    this.video = data.video;

     console.log(this.video);
  }

  back(): void {
    this.location.back();
  }

}
