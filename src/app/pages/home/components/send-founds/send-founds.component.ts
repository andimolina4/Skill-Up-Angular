import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-founds',
  templateUrl: './send-founds.component.html',
  styleUrls: ['./send-founds.component.scss']
})
export class SendFoundsComponent implements OnInit {

  showIdField:boolean = false

  userID= new FormControl(0,[Validators.required,Validators.min(0)])

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toogleIdField(){
    this.showIdField = !this.showIdField
  }
  goToId(){
    if(this.userID.valid)
      this.router.navigateByUrl(`/home/gastos/carga?userId=${this.userID.value}`)
  }

}
