export interface UserRequest {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  roleId?: number,
  points?: number
}

export interface UserResponse {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  points: number,
  roleId: number,
  updatedAt: Date,
  createdAt: Date
}


