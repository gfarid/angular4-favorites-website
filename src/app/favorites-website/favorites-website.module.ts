import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { FilterFavoriteWebsitePipe } from './../pipes/filter-favorites-website.pipe';
import { UtilsService } from './../services/utils/utils.service';
import { ActionsLogService } from './../services/actions-log.service';
import { FavoriteWebsitesService } from './../services/favorite-websites.service';
import { FavoritesWebsiteRoutingModule } from './favorites-website-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FavoritesSiteComponent } from './favorites-site/favorites-site.component';
import { FavoritesWebsiteRootComponent } from './favorites-website-root/favorites-website-root.component';
import { ActionsLogComponent } from './actions-log/actions-log.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HandleSiteModalComponent } from './handle-site-modal/handle-site-modal.component';
import { FormsModule , ReactiveFormsModule }  from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FavoritesWebsiteRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[FavoriteWebsitesService , ActionsLogService , UtilsService],
  declarations: [NavigationBarComponent, FavoritesSiteComponent, FavoritesWebsiteRootComponent, ActionsLogComponent, HandleSiteModalComponent , FilterFavoriteWebsitePipe, ErrorMessagesComponent],
  exports:[FavoritesWebsiteRootComponent],
  entryComponents:[HandleSiteModalComponent]
})
export class FavoritesWebsiteModule { }
