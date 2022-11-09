export interface TransactionRequest {
    amount: number,
    concept: string,
    date: string,
    type: string,
    accountId: number,
    userId: number,
    to_account_id: number
  }

  export interface TransactionResponse {
    amount: number,
    concept: string,
    date: string,
    type: string,
    accountId: number,
    userId: number,
    to_account_id: number
  }

