import { FavoritesWebsiteRootComponent } from './favorites-website-root/favorites-website-root.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { ActionsLogComponent } from './actions-log/actions-log.component';
import { FavoritesSiteComponent } from './favorites-site/favorites-site.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', 
    component:FavoritesWebsiteRootComponent ,
    // pathMatch: 'full',
    children: [
      { path:'' , redirectTo:'favorites' , pathMatch: 'full'},
      { path: 'favorites', component:FavoritesSiteComponent },
      { path: 'actions-log', component: ActionsLogComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesWebsiteRoutingModule { }
export const FavoritesWebsiteRoutes : Routes = routes;
