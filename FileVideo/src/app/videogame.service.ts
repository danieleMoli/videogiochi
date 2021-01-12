import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class VideogameService {

  constructor(private http: HttpClient) { }

  searchVideo(query: string) {
    const url = `https://api.rawg.io/api/games?page_size=10&search=${query}`;
      let obsVideo = this.http.get(url);
      console.log(obsVideo);
      return obsVideo;
  //Ritorno un observable ai componenti che richiedono il servizio
    }

  getVideo(id: string): any {
    const url = `https://api.rawg.io/api/games/${id}`;
      console.log(this.http.get(url));
      return this.http.get(url,);
    }



}
