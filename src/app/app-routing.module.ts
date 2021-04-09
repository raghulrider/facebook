import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './entry/login/login.component';
import { SignupComponent } from './entry/signup/signup.component';
import { GamingComponent } from './home/gaming/gaming.component';
import { TempComponent } from './home/gaming/temp/temp.component';
import { VideoComponent } from './home/gaming/video/video.component';
import { GroupsComponent } from './home/groups/groups.component';
import { HomeComponent } from './home/home/home.component';
import { MarketplaceComponent } from './home/marketplace/marketplace.component';
import { PagesComponent } from './home/pages/pages.component';
import { WatchComponent } from './home/watch/watch.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "pages", component: PagesComponent,
  children : [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'groups',
      component: GroupsComponent,
    },
    {
      path: 'watch',
      component: WatchComponent,
    },
    {
      path: 'marketplace',
      component: MarketplaceComponent,
    },
    {
      path: 'gaming',
      component: GamingComponent,
      children:[
        {
          path:'',
          component:VideoComponent
        },
        {
          path:'video',
          component:VideoComponent
        },
        {
          path:":pagename",
          component:TempComponent
        }
      ]
    }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
