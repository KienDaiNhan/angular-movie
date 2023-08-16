import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dataSource:any;

  constructor(private router:Router,private auth:AuthService){

  }
  ngOnInit(): void {
   
  }
        gotoHome(){
           this.router.navigate(['home']);
        }
        logout(){
          this.auth.logout(); 
        }
        applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
 
}
