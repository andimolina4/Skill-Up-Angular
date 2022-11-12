import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-saldo',
  templateUrl: './edit-saldo.component.html',
  styleUrls: ['./edit-saldo.component.scss']
})
export class EditSaldoComponent implements OnInit {

  isEditing:boolean = false

  constructor(  private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isEditing = params['edit'] === 'true';
      console.log(this.isEditing)
    });
  }

}
