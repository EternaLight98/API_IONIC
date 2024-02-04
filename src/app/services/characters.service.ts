import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/API';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http : HttpClient
  ) { }

  getCharacters(){
    return this.http.get(API.characters)
  }

  getcharacter(id: string | null){
    return this.http.get(`${API.characters}/${id}`);
  }
}

