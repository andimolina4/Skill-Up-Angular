import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faShapes, faPiggyBank, faTicket, faScaleBalanced, faMoneyBillTransfer, faPaperPlane, faRotate, faChartLine, faUser, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@app/core/services/auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //Close on click on mobile
  @Output() selected:EventEmitter<boolean> = new EventEmitter()
  mobileQuery: MediaQueryList;

  //Auth
  isLogged:boolean = false

  //Icons
  shapes = faShapes
  piggy = faPiggyBank
  ticket = faTicket
  scale = faScaleBalanced
  transfer = faMoneyBillTransfer
  send = faPaperPlane
  chart = faChartLine
  user = faUser
  users = faUsers
  exit = faRightFromBracket

  constructor(
    private authService:AuthService,
    private router:Router,
    private media: MediaMatcher,
    ){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(
      data=>{
        this.isLogged = data
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

  hideNav(){
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    if(this.mobileQuery.matches){
      this.selected.emit()
    }
  }

}
