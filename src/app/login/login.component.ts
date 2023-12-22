import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:any ;
  pass: any;
  
    onClick() {
      console.log(this.user)
      console.log(this.pass)
    }
   
    constructor(private auth:AuthService,
      private router:Router){}
      nav(){
        this.auth.login()
        if (this.auth.isLoggedIn()) {
          this.router.navigate(['/home']);
        } else {
          // If not logged in, you may choose to handle it differently (e.g., show an error message)
          console.log("User not logged in");
        }
      }
      

}
