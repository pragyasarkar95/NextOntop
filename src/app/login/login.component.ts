import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_id: any;
  password: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  getErrorMessage(): boolean {
    if (this.user_id === '') {
    //   this.toastr.success('Enter valid email', '', {
    //     timeOut: 3000,
    //     positionClass: 'toast-bottom-center',
    //     tapToDismiss: true
    //   });
    // } else if(this.user_id.includes('@' && '.')) {
    //   this.toastr.success('Enter valid email', '', {
    //     timeOut: 3000,
    //     positionClass: 'toast-bottom-center',
    //     tapToDismiss: true
    //   });
    }
    if (this.password === '') {
      // this.toastr.success('Enter valid password', '', {
      //   timeOut: 3000,
      //   positionClass: 'toast-bottom-center',
      //   tapToDismiss: true,


      // });
      return false;
    }
    return true;
  }

  login()
  {
    if (this.getErrorMessage()) {
    this.router.navigate(['home'])
    } else {
      localStorage.setItem('user_id', JSON.stringify(this.user_id));
      localStorage.setItem('password', JSON.stringify(this.password));
          this.router.navigate(['home']);
          // this.toastr.success('Logged In successfully', '', {
          //   timeOut: 3000,
          //   positionClass: 'toast-bottom-center',
          //   tapToDismiss: true,


          // });
    }
  }

  signup()
  {
    this.router.navigate(['register'])
  }

  keyPress(event: KeyboardEvent) {
    if (event.keyCode === 13)
    {
    
      this.router.navigate(['home'])
    
    }

  }

}
