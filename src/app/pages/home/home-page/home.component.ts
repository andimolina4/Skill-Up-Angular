import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  menuItems = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: 'dashboard',
    },
    {
      name: 'Saldo',
      icon: 'savings',
      link: 'saldo',
    },
    {
      name: 'Gastos',
      icon: 'receipt_long',
      link: 'gastos',
    },
    {
      name: 'Balance',
      icon: 'balance',
      link: 'balance',
    },
    {
      name: 'Movimientos',
      icon: 'swap_horiz',
      link: 'movements',
    },
    {
      name: 'Enviar Dinero',
      icon: 'send',
      link: 'send-founds',
    },
    {
      name: 'Exchange',
      icon: 'currency_exchange',
      link: 'exchange',
    },
    {
      name: 'Inversiones',
      icon: 'trending_up',
      link: 'investment',
    },
    {
      name: 'Mi Cuenta',
      icon: 'account_circle',
      link: 'my-account',
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    console.log('logout');
  }
}
