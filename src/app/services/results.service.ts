import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Recipe{
[x: string]: any;
  recipe:{
    label: string,
    image: string,
    ingredients: any [],
    cuisineType: string,
    dishType:string
  }
  addedToFavourites?: boolean; 
}


@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  APP_ID:string = "";
  APP_KEY:string = "";

  query:string = '';
  recipes:Recipe[] = [];

  constructor(private http:HttpClient) { }


  getResults():Observable<Recipe[]>{
    return this.http.get(`https://api.edamam.com/search?q=${this.query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`).pipe(map((data:any)=>{
      console.log('results for coffee',data);
      this.recipes = data.hits;
      return this.recipes;
    }))
  }
}
