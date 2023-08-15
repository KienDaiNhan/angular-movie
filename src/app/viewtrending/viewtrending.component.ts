import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewtrending',
  templateUrl: './viewtrending.component.html',
  styleUrls: ['./viewtrending.component.scss']
})
export class ViewtrendingComponent implements OnInit {
  trendingMovies:any;
  movies:any;
  type='';
  constructor(private http:HttpClient,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];     
    this.getTrendingMovies();
  }
  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
        this.trendingMovies=movies;
        console.log(this.trendingMovies);
    });
}
}
