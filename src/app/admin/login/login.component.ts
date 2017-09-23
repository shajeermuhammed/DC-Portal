import { Component, OnInit, Renderer } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private renderer: Renderer,private formBuilder: FormBuilder,private loginService : LoginService) { }

  ngOnInit() {
    this.buildForm();    
  }

  buildForm() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required])]
		});
  }
  
  doLogin(){
    this.loginService.doLogin().subscribe((result) => {
      console.log('result = ', result)
    })
  }

}
