import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private apiService: ApiResponseService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getAllUsers().subscribe({
      next: resp => {
        this.users = resp.data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getFirstLetter(word: string) {
    return word.charAt(0);
  }

  goToSendMoney(id: number) {
    if(id) {
      this.router.navigateByUrl(`/home/gastos/carga?userId=${id}`);
    }
  }

}
