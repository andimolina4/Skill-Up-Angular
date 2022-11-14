import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { Cuenta, DepositForm } from '@app/interfaces/api.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-saldo',
  templateUrl: './edit-saldo.component.html',
  styleUrls: ['./edit-saldo.component.scss']
})
export class EditSaldoComponent implements OnInit {

  isLoading:boolean = true
  isEditing:boolean = false
  formValid:boolean = false
  formData:DepositForm = <DepositForm>{}

  accounts:Cuenta[] = []

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private apiService:ApiResponseService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isEditing = params['edit'] === 'true';
    });
  }

  checkForm(data:FormGroup){
    this.formValid = data.valid
    this.formData = data.value
  }

  makeDeposit(){
    this.apiService.makeDeposit(this.formData.accountID,
      {
        type:'topup',
        concept: this.formData.concept,
        date: this.formData.date,
        amount:this.formData.amount
      }
    ).subscribe(
      {next:data=>{
        console.log(data)
        Swal.fire(
          {
            title: 'Éxito',
            text: data.error,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3b86ff',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Realizar otro deposito',
            cancelButtonText: 'Volver al inicio'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            }
            else{
              this.router.navigateByUrl('/home')
            }
          }
        )
      },
      error:err=>{
        console.log(err)
      }

    }
    )
  }


}
