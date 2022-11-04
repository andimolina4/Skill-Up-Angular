import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  showAlertSuccess(text: String){
    return swal.fire({
      title: text,
      text: 'Haga click para continuar',
      icon: 'success',
      showConfirmButton: true
    })
  }


  showAlertError(tittle: string,text : string){
    return swal.fire({
      icon: 'error',
      title: tittle,
      text: text,
    });
  }


   showAlertInformation(text: String) {
    return  swal.fire({
      title: text,
      icon: 'info',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido',
    })
  }

  showAlertDecision(text: String) {
    return  swal.fire({
      title: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    })
  }
}
