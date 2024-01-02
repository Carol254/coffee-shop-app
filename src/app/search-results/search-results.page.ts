import { Component, Input, OnInit } from '@angular/core';
import { Recipe, ResultsService } from '../services/results.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  recipes:Recipe[] = [];
  @Input() item = '';

  results:string = '';

  constructor(private resultsService:ResultsService ,private router:Router ,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.results = params['data'] || '';
    });
    this.loadRecipes();
  }

  loadRecipes(){
      this.resultsService.getResults().subscribe({
        next:(recipe:Recipe[])=>{
          this.recipes = recipe;
          console.log('list of recipes',this.recipes);
        },
        error:(err:any)=>{
          console.error('Error fetching results',err);
        }
      });
  }

  back(){
    this.router.navigate(['/home']);
  }
}
