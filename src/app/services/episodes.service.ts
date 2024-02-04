import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/API';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(
    private http: HttpClient
  ) { }

  getEpisodes(){
    return this.http.get(API.episodes);
  }

  getEpisode(id: any){
    return this.http.get(`${API.episodes}/${id}`)
  }

}
