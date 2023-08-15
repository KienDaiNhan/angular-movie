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

    constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router){

    } 
    ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];     
      this.getPopularMovies();
    }
    getPopularMovies() {
      this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
         this.popularMovies=movies;
         console.log(this.popularMovies);
     });
    }
}
