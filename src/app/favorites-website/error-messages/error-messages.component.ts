import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {
  @Input('control')
  formControl: FormControl;
  
  constructor() { }

  ngOnInit() {
  }

  getErrors() {
    let errors: Array<string> = [];
    for (var key in this.formControl.errors) {
      errors.push(this.getErrorMessage(key, this.formControl.errors[key]));
    }
    return errors;
  }

  getErrorMessage(key: string, value: any): string {
    switch (key) {
      case 'required':
        return 'field required !!!';
      case 'nameAlreadyExist':
        return 'website name already exist !!!';
      case 'minlength':
        return `min lenght is ${value.requiredLength} ,current length is ${value.actualLength} !!!`;
      case 'invalidurl':
        return 'url is not valid'  
        default:
        return `error in ${key} `
    }
  }

}

