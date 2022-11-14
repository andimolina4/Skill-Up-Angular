import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from '@app/core/services/alerts/alerts.service';
import { AuthService } from '@app/core/services/auth/auth.service';

export interface UserLoginRequest {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLoginRequest = {
    email: '',
    password: ''
  }

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private alertsService: AlertsService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    this.authService.login(this.user).subscribe({
      next: res => {
        localStorage.setItem('accessToken', res.accessToken);
        this.authService.updateLoggedInState()
        this.router.navigate(['home/dashboard']);
      },
      error: err => {
        console.log(err);
        this.alertsService.showAlertError('No fué posible iniciar sesión', `Error: ${err.error.error}. Por favor, verifique sus datos e intente nuevamente.`);
      }
    })
  }

}
