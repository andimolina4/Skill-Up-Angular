import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '@app/core/services/auth/auth.service';
import { UserRequest } from '@app/interfaces/user.interface';
import { faCoffee, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '../validators/customValidators';

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
      name: [''],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
      check: [false, Validators.requiredTrue]
    },
    { validator: CustomValidators.MatchingPasswords })
    // }, { validator: this.checkPasswords })
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

  // Validamos que las contrasenias coincidan

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = this.registerForm.get('password')?.value;
    let confirmPass = this.registerForm.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

}
