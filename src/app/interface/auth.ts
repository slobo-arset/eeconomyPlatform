export interface LoginData {
  username: string,
  password: string
}


export interface AuthState extends AuthResp{
  isLogin: boolean

}

export interface AuthResp {
  companyName?: string
  companyId?: number
  userId?: string
  token: string
}
