import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamingmenu',
  templateUrl: './gamingmenu.component.html',
  styleUrls: ['./gamingmenu.component.css']
})
export class GamingmenuComponent implements OnInit {

  recentlyWatched: any = [
    {
      logo: "https://image.freepik.com/free-vector/crazy-gamer-joker-gamer-concept-e-sport-logo-vector-illustration_90508-161.jpg",
      name: "Crazy Gamer",
      gamename: "GTA V"
    },
    {
      logo: "https://ih1.redbubble.net/image.707617847.6359/st,small,845x845-pad,1000x1000,f8f8f8.u5.jpg",
      name: "Ninja",
      gamename: "PUBG"
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1358922788816515077/LhzMq3Xz_400x400.jpg",
      name: "Godzly",
      gamename: "COD Mobile"
    }

  ];
  suggested: any = [
    {
      logo: "https://yt3.ggpht.com/ytc/AAUvwnhBDZ5O9r3CNzvgZs1qkXkrs4dXVPlFdJ3-9n7KOw=s900-c-k-c0x00ffffff-no-rj",
      name: "iFerg",
      gamename: "COD Mobile"
    },
    {
      logo: "https://influencermarketinghub.com/wiki/wp-content/uploads/2020/12/TheMyth-4-.jpg",
      name: "Myth (Ali Kabani) ",
      gamename: "Cyberpunk 2077"
    },
    {
      logo: "https://static.toiimg.com/thumb/msid-76682135,width-1200,height-900,resizemode-4/.jpg",
      name: "DrDisrespect",
      gamename: "PUBG"
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
