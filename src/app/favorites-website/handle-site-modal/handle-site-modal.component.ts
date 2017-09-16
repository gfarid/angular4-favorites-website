import { UtilsService } from './../../services/utils/utils.service';
import { ActionLog , ActionLogType } from './../../model/actionlog';
import { ActionsLogService } from './../../services/actions-log.service';
import { Website } from './../../model/website';
import { FavoriteWebsitesService } from './../../services/favorite-websites.service';
import { Component, OnInit , Input} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl } from "@angular/forms";

@Component({
  selector: 'app-handle-site-modal',
  templateUrl: './handle-site-modal.component.html',
  styleUrls: ['./handle-site-modal.component.css']
})
export class HandleSiteModalComponent implements OnInit {
  @Input() title:string ;
  @Input() buttonName:string ;
  @Input() actionlogtype:ActionLogType;
  @Input() data:Website ;
  actionLogType:any = ActionLogType;
  websiteid : string ;
  actionlog :ActionLog;
  favoritewebsite : Website;
  favoritewebsiteForm : FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private favoriteWebsitesService:FavoriteWebsitesService,
              private actionsLogService:ActionsLogService,
              private formBuilder : FormBuilder,
              private utilsService: UtilsService
  ) {}

  private uniqWebsiteName(control: FormControl): ValidationErrors {
    if(this.utilsService.searchInArrayOfObjects('name',control.value,this.favoriteWebsitesService.get()) !== -1) 
    {
      return { nameAlreadyExist: true };
    }
    else {
      return null;
    }
  }


  private  urlValidator(control: FormControl): ValidationErrors {
      let re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
      if (!re.test(control.value)) { 
          return { invalidurl: true };
      }
      else{
        return null;
      }
  }

  private setForm(){
    this.favoritewebsiteForm = this.formBuilder.group({
      name:[this.favoritewebsite.name , Validators.compose([this.uniqWebsiteName.bind(this),Validators.minLength(3),Validators.maxLength(10),Validators.required])],
      url:[this.favoritewebsite.url , Validators.compose([this.urlValidator,Validators.required])],
      id:[this.favoritewebsite.id]
    })
  }   

  ngOnInit() {
    this.favoritewebsite = 
    this.data ? {
      name:this.data.name,
      url:this.data.url,
      id:this.data.id
    } : 
    {
      name:'',
      url:'',
      id:''
    };
    this.setForm();
  }

  private handleFavoriteSite(website:Website){
    this.favoritewebsite = this.favoritewebsiteForm.value;
    if(this.actionlogtype === this.actionLogType.webSiteAdded ){
      this.websiteid = this.utilsService.guid();
      this.favoritewebsite.id = this.websiteid;
      this.setForm();
      this.favoriteWebsitesService.add(this.favoritewebsite);
    }
    else if (this.actionlogtype === this.actionLogType.webSiteEdited){
      this.setForm();
      this.favoriteWebsitesService.edit(this.favoritewebsite);
    }

    else if(this.actionlogtype === this.actionLogType.webSiteRemoved){
      this.setForm();
      this.favoriteWebsitesService.delete(this.favoritewebsite);
    }

    let actionlogdate ={date :new Date().toLocaleString() , actiontype:this.actionlogtype}
    this.actionlog = {...actionlogdate , ...this.favoritewebsite };
    this.actionsLogService.add(this.actionlog);
    this.activeModal.close();
  }

}
