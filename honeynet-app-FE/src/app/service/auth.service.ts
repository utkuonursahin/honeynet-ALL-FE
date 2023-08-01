import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {User} from "../model/User";
import {GenericResponse} from "../interface/GenericResponse";
import {Router} from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private serverUrl:String = 'http://localhost:8080';
  public userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
  public switchSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('switch') || '{}') === true);

	constructor(private http: HttpClient, private router:Router) {}

  login(formData:FormData):Observable<GenericResponse<User>>{
		return this.http.post<GenericResponse<User>>(`${this.serverUrl}/login`, formData,{withCredentials: true});
	}
  checkIsAuthenticated():Observable<GenericResponse<boolean>>{
    return this.http.get<GenericResponse<boolean>>(`${this.serverUrl}/user/is-authenticated`,{withCredentials:true});
  }
  findUserToSwitch(firmId:string):Observable<GenericResponse<User>>{
    return this.http.get<GenericResponse<User>>(`${this.serverUrl}/user/find-user-to-switch?firmId=${firmId}`,{withCredentials:true});
  }
  impersonate(firmId:string){
    return this.findUserToSwitch(firmId).pipe(map(res => {
      this.http.post<GenericResponse<User>>(`${this.serverUrl}/login/impersonate?email=${res.data.email}`,{},{withCredentials:true}).subscribe({
        next: ({data:user}) => {
          localStorage.setItem('switch', 'true')
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          this.switchSubject.next(true);
          this.router.navigateByUrl('/dashboard')
        }
      });
    }))
  }
  exitImpersonate():void{
    this.http.post<GenericResponse<User>>(`${this.serverUrl}/logout/impersonate`,{},{withCredentials:true}).subscribe({
      next: res => {
        localStorage.removeItem('switch');
        localStorage.setItem('user', JSON.stringify(res.data));
        this.userSubject.next(res.data);
        this.switchSubject.next(false)
        this.router.navigateByUrl('/firms')
      }
    });
  }
  logout():Observable<GenericResponse<User>>{
    return this.http.get<GenericResponse<User>>(`${this.serverUrl}/logout`,{withCredentials:true})
  }
}
