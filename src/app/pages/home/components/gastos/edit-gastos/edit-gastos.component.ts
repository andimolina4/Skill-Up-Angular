import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponseService } from '@app/core/services/api/api-response.service';
import { UserService } from '@app/core/services/users/user.service';
import { Cuenta, DepositForm } from '@app/interfaces/api.interface';
import { UserResponse } from '@app/interfaces/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-gastos',
  templateUrl: './edit-gastos.component.html',
  styleUrls: ['./edit-gastos.component.scss']
})
export class EditGastosComponent implements OnInit {

  isEditing:boolean = false
  userId:string = ''
  userData:UserResponse = <UserResponse>{}
  isLoadingUser:boolean = true
  errorLoading:boolean = false

  //Form
  formValid:boolean = false
  formData:DepositForm = <DepositForm>{}

  accounts:Cuenta[] = []
  


  constructor(
    private route: ActivatedRoute,
    private userService:UserService,
    private router:Router,
    private apiService:ApiResponseService

    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isEditing = params['edit'] === 'true';
      this.userId = params['userId']
      this.userService.getById(this.userId).subscribe(
        {next:data=>{
          this.userData = data
          this.isLoadingUser=false
        },
      error:err=>{
        Swal.fire(
          err.error.error
        ).then(result=>{
          if(result.isConfirmed){
            this.router.navigateByUrl('/home/send-founds')
          }
        }
        )
      }}
      )
    });

    this.apiService.getAccounts().subscribe(
      {next:data=>{
        this.accounts = data
      },
      error:err=>{
        console.log(err)
      }
    }
    )
  }
  checkForm(data:FormGroup){
    this.formValid = data.valid
    this.formData = data.value
  }
  sendMoney(){
    Swal.fire(
      'Error',
      'No se puede acceder a las cuentas de otros usuarios, por lo que es imposible realizar un envio'
    )
  }
}
