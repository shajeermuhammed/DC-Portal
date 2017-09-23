import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ValidationService {

  constructor() { }

  public getValidatorErrorMessage(validatorName: string, messageKeys?: Object, validatorValue?: any) {
    if (!_.isUndefined(messageKeys)) {
        if (messageKeys[validatorName]) {
            return messageKeys[validatorName];
        }
        return null;
    }
    else {
        if (!validatorValue.requiredLength) {
            return null;
        }
        return ({ value: validatorValue.requiredLength });
    }
}

}
