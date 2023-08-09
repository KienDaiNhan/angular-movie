import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
        username="";
        password="";
        errorMsg= "";
        constructor(private auth: AuthService,private router: Router){

        }
        login(){
          if(this.username.trim().length === 0 ){
              this.errorMsg = "Yêu cầu nhập tên đăng nhập!";
          }else if (this.password.trim().length === 0 ){
            this.errorMsg = "Yêu cầu nhập mật khẩu!";
        }else {
          this.errorMsg="";
          let res = this.auth.login(this.username,this.password);
          if(res===200){
            this.router.navigate(['home'])
          }
          if(res===403){
            this.errorMsg="Sai tài khoản hoặc mật khẩu!";
          }
        }
             
  }
}
