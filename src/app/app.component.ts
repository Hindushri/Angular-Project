import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-more-features';

  userdetails: any = {};

  userResponce: any;

  constructor(private log: LoginService, private router: Router) {}

  async ngAfterViewInit() {
    const userEmail = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');
    const type = localStorage.getItem('type');

    await this.log.login(userEmail, userPassword).subscribe({
      next: (response: Array<any>) => {
        console.log(response,'jbh');

        response.map((item) => {
          if (item.email === userEmail && item.password === userPassword) {
            this.userResponce = item;
              if (item.type == 'admin')
                this.router.navigate(['admin/home']);
              else this.router.navigate(['user/home']);
          } 
        });
      },
    });

    if(!this.userResponce) 
      {
      this.router.navigate(['login']);
    } 
  }
}
