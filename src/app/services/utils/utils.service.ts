import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

   searchInArrayOfObjects(prop ,val, arr){
    let arrLength =  arr.length;
    for (let i=0; i < arrLength; i++) {
        if (arr[i][prop] === val) {
            return i ;
        }
    }
    return -1;
  }

}
