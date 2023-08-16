import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.scss']
})
export class ViewallComponent implements OnInit {

  type='';
  movie: any;
  movies: any;
  popularMovies: any;
  id:any;

    constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router){

    } 
    ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];     
      this.getPopularMovies();
      this.getMovie();
    }
    getPopularMovies() {
      this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
         this.popularMovies=movies;
         console.log(this.popularMovies);
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
