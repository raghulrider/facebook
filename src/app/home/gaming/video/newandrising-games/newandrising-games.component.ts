import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newandrising-games',
  templateUrl: './newandrising-games.component.html',
  styleUrls: ['./newandrising-games.component.css']
})
export class NewandrisingGamesComponent implements OnInit {
  
  newandrising: any;
  constructor() { }

  ngOnInit(): void {
    this.newandrising = [
      {
        name: "PUBG Mobile",
        poster: "https://i.pinimg.com/474x/cc/f5/16/ccf516ec57b13c340d90f2473dd23e08.jpg",
        playCount: "100k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "Minecraft",
        poster: "https://www.britishvintageposters.co.uk/ekmps/shops/6d7106/images/minecraft-poster-2464-p.jpg",
        playCount: "345k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "Fortnite",
        poster: "https://i.pinimg.com/originals/cd/c5/67/cdc567bbddd7d05763248ee364576471.jpg",
        playCount: "2.1k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "GTA V",
        poster: "https://i.pinimg.com/originals/41/4a/06/414a06b60985a23d3ec4095168ecb027.jpg",
        playCount: "45k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "Among US",
        poster: "https://i.pinimg.com/originals/3b/41/ad/3b41adcd4aa85d41470851f52fec954d.png",
        playCount: "345",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "World of Warcraft",
        poster: "https://images-na.ssl-images-amazon.com/images/I/91fvOxYmFnL.jpg",
        playCount: "10k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "CS GO",
        poster: "https://i.pinimg.com/originals/81/bb/27/81bb2759d8a548a1a05e3b1b0ad94ffc.jpg",
        playCount: "500k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "League of Legends",
        poster: "https://m.media-amazon.com/images/M/MV5BYjM2NmU3YmEtZDI1OC00NTQ5LWJmOGMtYmZmNGUyMWRlODBmXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
        playCount: "15k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "DOTA 2",
        poster: "https://i.pinimg.com/originals/69/2c/7f/692c7f9a1508c844932f7d2c71e2aac0.jpg",
        playCount: "23k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "Rocket League",
        poster: "https://i.pinimg.com/originals/49/6c/35/496c357f0e05c9ac38317dd1c413aa36.jpg",
        playCount: "90k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "Overwatch",
        poster: "https://i.pinimg.com/originals/ef/6f/f0/ef6ff0c405a2ce6ea2047e3c71a77425.jpg",
        playCount: "46.7k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "Apex Legends",
        poster: "https://m.media-amazon.com/images/M/MV5BOTlhMTdiY2YtOTI3My00Y2M5LWI5YWQtYzgyYzgzMzhlMzExXkEyXkFqcGdeQXVyMzM2MzI5MzU@._V1_.jpg",
        playCount: "43.9k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "Free Fire",
        poster: "https://m.media-amazon.com/images/M/MV5BM2U5ZTIxMzUtMmQ5MC00YTdhLThjOWYtODUzNDQ0MThmMmQ4XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg",
        playCount: "11",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "R6",
        poster: "https://i.redd.it/feqkqzigc4s01.jpg",
        playCount: "500k",
        friendsWhoFollow:this.getImages()
      },
      {
        name: "COD Mobile",
        poster: "https://m.media-amazon.com/images/M/MV5BMDE0YWZmYjItZjlmYi00MjM1LWE4ZDctM2JmNjA3N2U0NzEzXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
        playCount: "900k",
        friendsWhoFollow:this.getImages()
      },
    ]
    this.shuffle(this.newandrising)
  }

  shuffle(array: any) {
    array.sort(() => Math.random() - 0.5);
  }

  getImages= () : string[]=>{
    let imageCount = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let images:string[]=[]
    for(let i=0;i<imageCount;i++){
      let res = Math.floor(Math.random() * (800 - 50 + 1) + 50);
      images.push(`https://picsum.photos/${res}`)
    }
    return images;
  }

}
