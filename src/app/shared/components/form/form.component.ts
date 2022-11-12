import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Cuenta } from '@app/interfaces/api.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  @Input() editing:boolean = false

  @Output() formData:EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  actionForm = this.fb.group({
    amount:['',[Validators.required,Validators.min(0)]],
    concept:['',Validators.required],
    date:['',Validators.required],
    accountID:['',Validators.required]
  })

  accounts:Cuenta[]=[]

  constructor(
    private fb: FormBuilder,
    private apiService:ApiResponseService
    ) {
   }

  ngOnInit(): void {
    this.apiService.getAccounts().subscribe(
      {next:data=>{
        this.accounts = data
      },
      error:err=>{
        console.log(err)
      }
    }
    )
    if(this.editing){
      this.actionForm.get('amount')?.disable()
      this.actionForm.get('date')?.disable()
    }
    this.actionForm.valueChanges.subscribe(
      {
        next:()=>{
            this.formData.emit(this.actionForm);
        },
        error:err=>{
          console.log(err)
        }
      }
    )

  }

}
