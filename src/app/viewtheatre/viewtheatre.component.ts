import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewtheatre',
  templateUrl: './viewtheatre.component.html',
  styleUrls: ['./viewtheatre.component.scss']
})
export class ViewtheatreComponent implements OnInit {
  type='';
  theatreMovies:any;
  movies:any;
  movie:any;
  id:any;
    constructor(private http:HttpClient,private route:ActivatedRoute, private router:Router){

    }
    ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];     
      this.getTheatreMovies();
      this.getMovie();
    }
    getTheatreMovies() {
      this.http.get('http://localhost:4200/assets/data/rap-movies.json').subscribe((movies) => {
         this.theatreMovies=movies;
         console.log(this.theatreMovies);
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
