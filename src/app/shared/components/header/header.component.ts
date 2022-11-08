import { Component, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() panelStatus:boolean = false
  faBars = faBars

  constructor() { }

  ngOnInit(): void {
  }

}
