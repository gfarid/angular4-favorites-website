import { ActionLog } from './../../model/actionlog';
import { ActionsLogService } from './../../services/actions-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.css']
})
export class ActionsLogComponent implements OnInit {
  actionslog:Array<ActionLog>
  constructor(private actionsLogService:ActionsLogService) { }

  ngOnInit() {
    this.actionslog = this.actionsLogService.get();
  }

}
