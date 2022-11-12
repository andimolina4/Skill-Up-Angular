import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/core/services/users/user.service';
import { UserResponse } from '@app/interfaces/user.interface';

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

  constructor(  private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isEditing = params['edit'] === 'true';
      this.userId = params['userId']
      this.userService.getById(this.userId).subscribe(
        {next:data=>{
          console.log(data)
          this.userData = data
          this.isLoadingUser=false
        },
      error:err=>{
        console.log(err)
      }}
      )
      console.log(this.isEditing)
    });
  }

}
