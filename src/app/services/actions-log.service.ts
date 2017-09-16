import { ActionLog } from './../model/actionlog';
import { Injectable } from '@angular/core';

@Injectable()
export class ActionsLogService {

  constructor() { }
  actionsLog:Array<ActionLog> = new Array<ActionLog>();
  get(){
    return this.actionsLog;
  }

  add(actionlog:ActionLog){
    this.actionsLog.push(actionlog);
  }
}
