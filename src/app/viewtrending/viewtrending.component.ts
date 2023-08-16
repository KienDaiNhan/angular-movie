import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-viewtrending',
  templateUrl: './viewtrending.component.html',
  styleUrls: ['./viewtrending.component.scss']
})
export class ViewtrendingComponent implements OnInit {
  trendingMovies:any;
  movies:any;
  type='';
  movie:any;
  id:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];     
    this.getTrendingMovies();
    this.getMovie();
  }
  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
        this.trendingMovies=movies;
        console.log(this.trendingMovies);
    });
  }
  goToMovie(type: string,id: string){
    this.router.navigate(['movie',type,id]);
 }
 getMovie(){
  this.http.get(`http://localhost:4200/assets/data/${this.type}-movies.json`).subscribe((movies) => {
      this.movies=movies; 
      let index = this.movies.findIndex((movie: any) => movie.id == this.id);      
  if(index > -1){
      this.movie = this.movies[index];
  }
   });
 }
}
