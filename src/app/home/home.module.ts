import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch/watch.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { GamingComponent } from './gaming/gaming.component';
import { PagesComponent } from './pages/pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    WatchComponent,
    MarketplaceComponent,
    HomeComponent,
    GroupsComponent,
    GamingComponent,
    PagesComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class HomeModule { }
