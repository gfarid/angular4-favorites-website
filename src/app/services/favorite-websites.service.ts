import { UtilsService } from './utils/utils.service';
import { Website } from './../model/website';
import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteWebsitesService {

  constructor(
    private utilsService:UtilsService
  ) {
    this.init();
   }
  favoritesWebsite: Array<Website> = new Array<Website>();

  init(){
    this.favoritesWebsite.push(
        {
          name:"site#1",
          url:"www.site_#1.com/page_1",
          id:"1"
        },
        {
          name:"site#2",
          url:"www.site_#2.com/page_2",
          id:"2"
        },
      );
  }
  get(){
    return this.favoritesWebsite;
  }

  add(website:Website){
    this.favoritesWebsite.push(website);
  }

  edit(website:Website){
    let index = this.utilsService.searchInArrayOfObjects('id',website.id,this.favoritesWebsite);
    if(index === -1 ){
      console.log("something went wrong !!!!!");
    }
    this.favoritesWebsite[index]["name"]=website.name;
    this.favoritesWebsite[index]["url"]=website.url;
  }

  delete(website:Website){
    let index = this.utilsService.searchInArrayOfObjects('id',website.id,this.favoritesWebsite);
    if(index === -1 ){
      console.log("something went wrong !!!!!");
    }
    this.favoritesWebsite.splice(index,1);
  }
}
