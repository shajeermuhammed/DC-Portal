import { Component, Renderer, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public setTemplate = false;
  public url: any;
  constructor(
    private renderer: Renderer,
    private router: Router,
    private location: Location) { }
  ngOnInit() {
    this.setClassOnBody();
  }

  /**
   * setClassOnBody
   */
  public setClassOnBody() {
    let route = this.location.path();
    console.log(route);
    if (route == '') {
      this.setTemplate = false;
      setTimeout(() => {
        this.renderer.setElementClass(document.body, 'hold-transition', true);
        this.renderer.setElementClass(document.body, 'login-page', true);
      }, 1000);
    } else {
      this.setTemplate = true;
      setTimeout(() => {
        this.renderer.setElementClass(document.body, 'skin-blue', true);
        this.renderer.setElementClass(document.body, 'sidebar-mini', true);        
      }, 1000);
    
    }
  }
}
