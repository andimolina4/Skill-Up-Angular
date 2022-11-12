import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  @Input() editing:boolean = false

  actionForm = this.fb.group({
    amount:['',[Validators.required,Validators.min(0)]],
    concept:['',Validators.required],
    date:['',Validators.required]
  })

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
    if(this.editing){
      this.actionForm.get('amount')?.disable()
      this.actionForm.get('date')?.disable()
    }
  }

}
