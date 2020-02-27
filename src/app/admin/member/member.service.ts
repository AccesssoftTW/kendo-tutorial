import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    const url = environment.backendDomain + "/api/v1/user/get";

    // 放置token在header
    const httpOptions = {
      headers: new HttpHeaders({
        auth_token: JSON.parse(localStorage.getItem("token")).auth_token
      })
    };

    return this.http.get(url, httpOptions);
  }

  addUser(userEntity: User): Observable<any> {
    const url = environment.backendDomain + "/api/v1/user/add";

    // 放置token在header
    const httpOptions = {
      headers: new HttpHeaders({
        auth_token: JSON.parse(localStorage.getItem("token")).auth_token
      })
    };

    return this.http.post(url, userEntity, httpOptions);
  }

  updateUser(userEntity: User): Observable<any> {
    const url = environment.backendDomain + "/api/v1/user/update";

    // 放置token在header
    const httpOptions = {
      headers: new HttpHeaders({
        auth_token: JSON.parse(localStorage.getItem("token")).auth_token
      })
    };

    return this.http.put(url, userEntity, httpOptions);
  }
  deleteUser(id: string): Observable<any> {
    const url = environment.backendDomain + `/api/v1/user/delete/${id}`;

    // 放置token在header
    const httpOptions = {
      headers: new HttpHeaders({
        auth_token: JSON.parse(localStorage.getItem("token")).auth_token
      })
    };

    return this.http.delete(url, httpOptions);
  }
}
