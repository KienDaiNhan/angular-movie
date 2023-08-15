import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewtheatre',
  templateUrl: './viewtheatre.component.html',
  styleUrls: ['./viewtheatre.component.scss']
})
export class ViewtheatreComponent implements OnInit {
  type='';
  theatreMovies:any;
  movies:any;
    constructor(private http:HttpClient,private route:ActivatedRoute){

    }
    ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];     
      this.getTheatreMovies();
    }
    getTheatreMovies() {
      this.http.get('http://localhost:4200/assets/data/rap-movies.json').subscribe((movies) => {
         this.theatreMovies=movies;
         console.log(this.theatreMovies);
     });
    }
}
