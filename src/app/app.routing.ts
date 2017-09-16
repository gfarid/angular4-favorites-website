import { NotFoundComponent } from './not-found/not-found.component';
import { FavoritesWebsiteRoutes } from './favorites-website/favorites-website-routing.module';
import { FavoritesWebsiteRootComponent } from './favorites-website/favorites-website-root/favorites-website-root.component';

import { Routes, RouterModule } from "@angular/router";

const rootRoutes: Routes = [
    {
        path:'',
        pathMatch:"full",
        component:FavoritesWebsiteRootComponent,
        children:FavoritesWebsiteRoutes
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }

]

export const routing = RouterModule.forRoot(rootRoutes);