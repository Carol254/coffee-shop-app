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
  APP_ID:string = "6bf43d57";
  APP_KEY:string = "e1a583b723dec659c24d8d3bd474c5ed";

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
