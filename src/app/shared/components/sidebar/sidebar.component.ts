import { Component, OnInit } from '@angular/core';
import { faShapes, faPiggyBank, faTicket, faScaleBalanced, faMoneyBillTransfer, faPaperPlane, faRotate, faChartLine, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@app/core/services/auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //Auth
  isLogged:boolean = false

  //Icons
  shapes = faShapes
  piggy = faPiggyBank
  ticket = faTicket
  scale = faScaleBalanced
  transfer = faMoneyBillTransfer
  send = faPaperPlane
  exchange = faRotate
  chart = faChartLine
  user = faUser
  exit = faRightFromBracket

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(
      data=>{
        this.isLogged = data
        console.log(data)
      }
    )
  }

  logout() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de cerrar sesión',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout()
        Swal.fire('Sesión cerrada', '', 'success');
        this.router.navigate(['/auth/login']);
      }
    });
  }

}
