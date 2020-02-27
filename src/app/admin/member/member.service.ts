import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    return this.http.get(url);
  }

  addUser(userEntity: User): Observable<any> {
    const url = environment.backendDomain + "/api/v1/user/add";

    return this.http.post(url, userEntity);
  }

  updateUser(userEntity: User): Observable<any> {
    const url = environment.backendDomain + "/api/v1/user/update";

    return this.http.put(url, userEntity);
  }
  deleteUser(id: string): Observable<any> {
    const url = environment.backendDomain + `/api/v1/user/delete/${id}`;

    return this.http.delete(url);
  }
}
