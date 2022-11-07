import { Component, OnInit } from '@angular/core';
import { faScaleBalanced, faPiggyBank, faTicket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  scaleIcon = faScaleBalanced
  piggy = faPiggyBank
  ticket = faTicket

  constructor(
  ) {}

  ngOnInit(): void {}

}
