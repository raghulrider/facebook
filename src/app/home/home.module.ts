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
import {MatButtonModule} from '@angular/material/button';
import { GamingmenuComponent } from './gaming/gamingmenu/gamingmenu.component';
import { VideoComponent } from './gaming/video/video.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TempComponent } from './gaming/temp/temp.component';
import { LiveComponent } from './gaming/video/live/live.component';
import { SuggestedLiveComponent } from './gaming/video/suggested-live/suggested-live.component';
import { PopularGamesComponent } from './gaming/video/popular-games/popular-games.component';
import { SuggestedTournamentComponent } from './gaming/video/suggested-tournament/suggested-tournament.component';
import { TopClipsComponent } from './gaming/video/top-clips/top-clips.component';
import { NewandrisingGamesComponent } from './gaming/video/newandrising-games/newandrising-games.component';
import { SuggestedGamesComponent } from './gaming/video/suggested-games/suggested-games.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WatchComponent,
    MarketplaceComponent,
    HomeComponent,
    GroupsComponent,
    GamingComponent,
    PagesComponent,
    ToolbarComponent,
    GamingmenuComponent,
    VideoComponent,
    TempComponent,
    LiveComponent,
    SuggestedLiveComponent,
    PopularGamesComponent,
    SuggestedTournamentComponent,
    TopClipsComponent,
    NewandrisingGamesComponent,
    SuggestedGamesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class HomeModule { }
