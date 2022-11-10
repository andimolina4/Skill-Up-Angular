import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { UserResponse } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  users: UserResponse[] = [];
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

  constructor(private apiService: ApiResponseService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUsers();
    this.authService.getUserLogged().subscribe(resp => {
      this.userResponse = resp;
      console.log(this.userResponse);
    })
  }

  getUsers() {
    this.apiService.getAllUsers().subscribe({
      next: resp => {
        this.users = resp;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
