import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { User } from "../_model/user";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Token } from "../_model/token";
import { Result } from "../_model/result";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  // 管理User狀態
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  // 管理Token狀態
  private tokenSubject: BehaviorSubject<Token>;
  public token: Observable<Token>;

  constructor(private http: HttpClient, private router: Router) {
    // User訂閱狀態
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();

    // Token訂閱狀態
    this.tokenSubject = new BehaviorSubject<Token>(
      JSON.parse(localStorage.getItem("token"))
    );
    this.token = this.tokenSubject.asObservable();
  }

  // 取得當前User
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // 取得當前Token
  public get tokenValue(): Token {
    return this.tokenSubject.value;
  }

  // 用戶登入
  login(username: string, password: string, redirectUrl: string) {
    // 呼叫登入API
    const loginUrl = environment.backendDomain + "/api/v1/auth/login";
    const loginBody = new User();
    loginBody.account = username;
    loginBody.password = password;
    this.http.post<Token>(loginUrl, loginBody).subscribe(
      (tokenData: Token) => {
        // 把token寫到暫存區
        localStorage.setItem("token", JSON.stringify(tokenData));

        // 通知註冊事件Token來了
        this.tokenSubject.next(tokenData);

        // Token取得成功，呼叫API拿取用戶資訊
        const userUrl = environment.backendDomain + "/api/v1/auth/user";

        // 呼叫取得User的API
        this.http.get<User>(userUrl).subscribe(
          (userData: User) => {
            // 把user寫到暫存區
            localStorage.setItem("currentUser", JSON.stringify(userData));

            // 通知註冊事件User來了
            this.currentUserSubject.next(userData);

            // 進到用戶原本要進入的網址
            this.router.navigate([redirectUrl]);
          },
          err => {
            alert(err.error.result);
          }
        );
      },
      err => {
        alert(err.error.result);
      }
    );
  }

  // 用戶登出
  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);
  }
}
