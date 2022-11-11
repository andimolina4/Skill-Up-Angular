export interface AccountList{
  data:Account[]
  nextPage:string | null
  previousPage:string | null
}
export interface Account{
  accountId:number
  amount:string
  concept:string
  date:Date
  id:number
  to_account_id:number
  type:string
  userId:number
}

//Testing, should change

export interface Cuenta{
  id:number,
  creationDate:Date
  money:string
  isBlocked:boolean
  userId:number
  createdAt?:Date
  updatedAt?:Date
}
