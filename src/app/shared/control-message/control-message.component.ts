import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../_services/validation.service';

@Component({
  selector: 'control-messages',
  template: `<span class="help-block" #message [hidden]="errorMessage == null">{{errorMessage}}</span>`
})
export class ControlMessageComponent {

  @Input() control: FormControl;
  @Input() messageKeys: Object;
  @ViewChild('message') element;
  constructor(private validation: ValidationService) { }
 
  get errorMessage() {
   for (let propertyName in this.control.errors) {
    if (this.control.errors.hasOwnProperty(propertyName) && (!this.control.pristine || this.control.touched)) {
     this.element.nativeElement.closest('.form-group').classList.add("has-error");
     return this.validation.getValidatorErrorMessage(propertyName, this.messageKeys, this.control.errors[propertyName]);
    }
   }
   this.element.nativeElement.closest('.form-group').classList.remove("has-error");
   return null;
  }
}
