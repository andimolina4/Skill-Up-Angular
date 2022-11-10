import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertsService } from '@app/core/services/alerts/alerts.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { UserRequest } from '@app/interfaces/user.interface';
import { faCoffee, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '../validators/customValidators';
import { DialogTermsAndCondition } from '@app/shared/components/dialog/dialog.component';

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
    roleId: 1,
    points: 20
  };

  terminosYCondiciones: string = 'Estos son los terminos y condiciones de AlkeBank. Estos  son los terminos y condiciones de AlkeBank. son los terminos y condiciones de AlkeBank. son los terminos y condiciones de AlkeBank.'

  faUser = faUserMd;

  registerForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private alertsService: AlertsService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name: [''],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
      check: [false, Validators.requiredTrue]
    },
    { validator: CustomValidators.MatchingPasswords, updatedOn: 'blur' })
    // }, { validator: this.checkPasswords })
  }

  onSignUp() {
    this.authService.signUp(this.user).subscribe({
      next: res => {
        this.router.navigate(['auth/login']);
        this.alertsService.showAlertSuccess('¡Registro exitoso!')
      },
      error: err => {
        console.log(err);
        this.alertsService.showAlertError('Hubo un error', err.error.error);
      }
    })
  }

  // Validamos que las contrasenias coincidan

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = this.registerForm.get('password')?.value;
    let confirmPass = this.registerForm.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogTermsAndCondition, {
      width: '250px',
      data: {data: this.terminosYCondiciones},
    });
  }

}
