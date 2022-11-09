export interface FixedtermdepositRequest{
    userId: number,
    accountId: number,
    amount: number,
    creation_date: string,
    closing_date: string
}

export interface FixedtermdepositResponse{
    userId: number,
    accountId: number,
    amount: number,
    creation_date: string,
    closing_date: string
}