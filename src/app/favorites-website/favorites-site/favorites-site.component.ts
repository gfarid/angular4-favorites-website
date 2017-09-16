import { FilterFavoriteWebsitePipe } from './../../pipes/filter-favorites-website.pipe';
import { Website } from './../../model/website';
import { FavoriteWebsitesService } from './../../services/favorite-websites.service';
import { HandleSiteModalComponent } from './../handle-site-modal/handle-site-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActionLogType } from './../../model/actionlog';
@Component({
  selector: 'app-favorites-site',
  templateUrl: './favorites-site.component.html',
  styleUrls: ['./favorites-site.component.css']
  
})
export class FavoritesSiteComponent implements OnInit {
  istilesview = false;
  isgridview = true;
  filteredKey:string;
  favoritesWebsite :Array <Website> ;
    constructor(
      private modalService: NgbModal,
      private favoriteWebsitesService:FavoriteWebsitesService
    ) {

    }
  
  ngOnInit() {
    this.favoritesWebsite = this.favoriteWebsitesService.get();
  }

  openFavWebsiteModal() {
    const modalRef = this.modalService.open(HandleSiteModalComponent);
    modalRef.componentInstance.title = 'Add a new website';
    modalRef.componentInstance.buttonName = 'Add website';
    modalRef.componentInstance.actionlogtype = ActionLogType.webSiteAdded;
    
  }

  toggleView(){
    this.istilesview =! this.istilesview;
    this.isgridview =! this.isgridview;
  }

  editFavWebsiteModal(websiteData:Website) {
    const modalRef = this.modalService.open(HandleSiteModalComponent);
    modalRef.componentInstance.title = 'Edit Website';
    modalRef.componentInstance.buttonName = 'Save Changes';
    modalRef.componentInstance.actionlogtype = ActionLogType.webSiteEdited;
    modalRef.componentInstance.data = websiteData;
  }

  deleteFavWebsiteModal(websiteData:Website){
    const modalRef = this.modalService.open(HandleSiteModalComponent);
    modalRef.componentInstance.title = 'Remove favorite website?';
    modalRef.componentInstance.buttonName = 'Remove website';
    modalRef.componentInstance.actionlogtype = ActionLogType.webSiteRemoved;
    modalRef.componentInstance.data = websiteData;
  }

  }
