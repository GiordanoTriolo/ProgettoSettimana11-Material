import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { IResponse } from '../interfaces/iresponse';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi: string = 'https://reqres.in/api/users/'

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get<IResponse>(this.urlApi);
  }

  getUserById(id: number){
    return this.http.get<{data: IUser}>(this.urlApi + id);
  }
}
