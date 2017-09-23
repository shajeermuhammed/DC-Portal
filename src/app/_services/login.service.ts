import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';

@Injectable()
export class LoginService {

	constructor(private httpService: HttpService) { }

	public doLogin(): Observable<any> {
		return this.httpService.get("http://localhost/DC/API/api/users/userDetails").map((response: any) => {
			return response.json();
		});
	}

}
