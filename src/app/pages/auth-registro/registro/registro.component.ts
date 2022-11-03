import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/core/services/auth/auth.service';
import { UserRequest } from '@app/interfaces/user.interface';
import { faCoffee, faUserMd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  user: UserRequest = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    roleId: 2,
    points: 20
  };

  faUser = faUserMd;

  registerForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      repeatPassword: [null, [Validators.required]]
    })
  }

  onSignUp() {
    this.authService.signUp(this.user).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
