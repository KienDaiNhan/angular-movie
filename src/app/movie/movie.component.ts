import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{  
    type='';
    id='';
    url='';
    movies: any;
    movie:any;
    
    constructor(private route:ActivatedRoute,private http:HttpClient){ }
    ngOnInit(): void {
      this.type = this.route.snapshot.params['type'];     
      this.id = this.route.snapshot.params['id'];
      this.getMovie();
      
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
