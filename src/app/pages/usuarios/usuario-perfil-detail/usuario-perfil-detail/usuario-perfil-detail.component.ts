import { Component, OnInit } from '@angular/core';
import { AlertsService } from '@app/core/services/alerts/alerts.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { UserRequest, UserResponse } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-usuario-perfil-detail',
  templateUrl: './usuario-perfil-detail.component.html',
  styleUrls: ['./usuario-perfil-detail.component.scss']
})
export class UsuarioPerfilDetailComponent implements OnInit {

  userResponse: UserResponse = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    roleId: 0,
    points: 0,
    createdAt: new Date,
    updatedAt: new Date
  };

  user: UserRequest =  {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    roleId: 0,
    points: 0
  };;

  isEditMode = false;

  constructor(private authService: AuthService, private alertsService: AlertsService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.authService.getUserLogged().subscribe({
      next: resp => {
        this.userResponse = resp;
        this.user = {
          first_name: this.userResponse.first_name,
          last_name: this.userResponse.last_name,
          email: this.userResponse.email,
          password: this.userResponse.password,
          roleId: this.userResponse.roleId,
          points: this.userResponse.points
        };
      },
      error: err => {
        this.alertsService.showAlertError('Ocurrió un error al tratar de mostrar su perfil.', 'Intente de nuevo mas tarde.')
      }
    })
  }

  onEditMode() {
    if (this.isEditMode) {
      this.authService.updateUser(this.user, this.userResponse.id).subscribe({
        next: resp => {
          console.log(resp);
          this.isEditMode = false;
        },
        error: err => {
          console.log(err);
          this.alertsService.showAlertError('Ocurrió un error al intentar actualizar los datos', 'Intente nuevamente mas tarde.');
        }
      })
    }
    if (!this.isEditMode) {
      this.isEditMode = true;
    }
  }

}
