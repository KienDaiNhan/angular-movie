import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() dataSource: any;  // Ideally this also should have type as MatTableDataSource
  @Output() filteredData = new EventEmitter();
  search: string = '';
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
        searchData(): void {
          this.dataSource.filter = this.search;
          this.filteredData.emit(this.dataSource.filteredData);
        }
 
}
