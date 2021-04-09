import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-live',
  templateUrl: './suggested-live.component.html',
  styleUrls: ['./suggested-live.component.css']
})
export class SuggestedLiveComponent implements OnInit {
  suggested: any = [
    {
      viewCount: "2.4k",
      videoUrl: "",
      thumbnailUrl: "https://st1.bgr.in/wp-content/uploads/2019/06/PUBG-Mobile-Erangel-gameplay.jpg",
      logo: "https://i.pinimg.com/736x/62/94/54/62945474180d73c59f6467ba8d81548f.jpg",
      name: "Mortal",
      gamename: "PUBG Mobile"
    },
    {
      viewCount: 500,
      videoUrl: "",
      thumbnailUrl: "https://i.ytimg.com/vi/zKM3_98I7nU/maxresdefault.jpg",
      logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb46f666181241.5b0d977d9e971.jpg",
      name: "Shroud",
      gamename: "COD"
    },
    {
      viewCount: "10k",
      videoUrl: "",
      thumbnailUrl: "https://s1.dmcdn.net/v/NoehO1Vn_ihLfY-TF/x1080",
      logo: "https://www.kindpng.com/picc/m/227-2272918_s-creed-ezio-auditore-assassins-creed-logo-ezio.png",
      name: "Ezio Auditore ",
      gamename: "Assasin's Creed Oddyssey"
    },
    {
      viewCount: "5.68k",
      videoUrl: "",
      thumbnailUrl: "https://evermotion.org/files/publications_images/slider__2254_2.jpg",
      logo: "https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png",
      name: "PewDiePie",
      gamename: "Witcher III"
    },
    {
      viewCount: 900,
      videoUrl: "",
      thumbnailUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200529202017/last-of-us-2-header.jpg",
      logo: "https://i.pinimg.com/originals/5b/ab/33/5bab33b24e63645db2c969e788676765.jpg",
      name: "JUEGAGERMAN",
      gamename: "Last of Us 2"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
