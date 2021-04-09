import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  volume:number=0;

  lives: any = [{
    videourl: "https://r2---sn-4pvgq-n8vs.googlevideo.com/videoplayback?expire=1617963531&ei=q9VvYOCzM5id7QTSkI84&ip=2a0b%3A1581%3Aa347%3Af941%3Ae32a%3A27a9%3A1d99%3A1e9d&id=o-ADOU80chdZyK_NdCnf0PbJmcx6zO0tpz-tQ782YhbG1m&itag=22&source=youtube&requiressl=yes&mh=Y1&mm=31%2C29&mn=sn-4pvgq-n8vs%2Csn-n8v7kn7l&ms=au%2Crdu&mv=m&mvi=2&pl=30&pcm2=yes&initcwndbps=237500&vprv=1&mime=video%2Fmp4&ns=KiunJYMv9FmZZegBvJATM_0F&ratebypass=yes&dur=97.198&lmt=1615148976448182&mt=1617941870&fvip=7&fexp=24001373%2C24007246&c=WEB&txp=6211222&n=yCvYyYEBXfcYuKP8&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMx77CKkqGN3pmjOgK6rE5ag24wiS0OZuc0cnEweRtAPAiEA1h9ENn224eGFAIgfeBfqqMYkrQp6LJdZV98LQNPAUSE%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgPOG-m4yN4dNaC5mbRnrsXFpS5KhFOFSblC9ss1nnG4ACIQCVV2LrIWhxGGCUhnTuL4zXgjt3nuDiqNYvw64JZ3vu5A%3D%3D&title=Rogue+Company+Best+Funny+Twitch+Streamer+Clips",
    livecount: "20k",
    imageurl: "https://i.pinimg.com/564x/67/a6/70/67a67031d994bb56c610be1c0722d84d.jpg",
    gamename: "Horror House",
    channelname: "Carryminatti",
    website: ""
  },
  {
    videourl: "https://r4---sn-4pvgq-n8ve.googlevideo.com/videoplayback?expire=1617963625&ei=CNZvYJ-6OsqHyQXz14j4Aw&ip=2a0b%3A1580%3Af80b%3A522d%3A7548%3A4cce%3A61b8%3Ab123&id=o-AP0EmwAGi8WDONU2naMk1SnDY_okkp1MTLUAWObvD6Jg&itag=22&source=youtube&requiressl=yes&mh=Dq&mm=31%2C29&mn=sn-4pvgq-n8ve%2Csn-n8v7znsk&ms=au%2Crdu&mv=m&mvi=4&pl=30&initcwndbps=221250&vprv=1&mime=video%2Fmp4&ns=EkH3NxcSrYijEaxHTCGUrbYF&cnr=14&ratebypass=yes&dur=19.922&lmt=1617845080419084&mt=1617941870&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=UT23Xz60URTdkOU0&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgU8RD0TEwD2JKxDFw5P6AonISkpMRi8rLFCipXCGW6IMCIQC-2S-1T0ydxzZ2xgTHxjR8jMnP8oOZW37DE12VAaCBsQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgI85k_29ezraMPSNSVHISdVWuWdoFuDZ88RzyMgHkyNYCIQCRJNWivTRDLVDqvrYxABd-zJ5zgnVtT1v63DDE71yHJw%3D%3D&title=Tubbo+Loses+His+Voice+On+Stream...",
    livecount: "890",
    imageurl: "https://i.gadgets360cdn.com/large/saloni_pawar_youtube_game_streamer_india_1576167082660.jpg",
    gamename: "Extreme Car 3",
    channelname: "Rider's Club",
    website: ""
  },
  {
    videourl: "https://r7---sn-4pvgq-n8ve.googlevideo.com/videoplayback?expire=1617963722&ei=atZvYPnJA5L9yAXYp4PYBA&ip=2a0b%3A1585%3A7b10%3A209e%3Aa6b3%3A8989%3A373a%3Af713&id=o-AK_ywQnab1oeLKFpAW3NSBvJ2G2aaoCQjU-S0X9I49JF&itag=22&source=youtube&requiressl=yes&mh=ug&mm=31%2C29&mn=sn-4pvgq-n8ve%2Csn-n8v7kn7l&ms=au%2Crdu&mv=m&mvi=7&pcm2cms=yes&pl=30&initcwndbps=221250&vprv=1&mime=video%2Fmp4&ns=Qgl_xDeQcn2JsHsMj2m4gocF&cnr=14&ratebypass=yes&dur=172.384&lmt=1526149345937208&mt=1617941870&fvip=7&fexp=24001373%2C24007246&c=WEB&n=pALTliMvhAnLlmX9&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAMv-vQlbpWJzN9U1zUWAwzH8x4uXv6NB7zbWUGW23FtJAiA7z8vJp6HE7PMVwf6YBU-yky8U9rHnsLmQeA0HB69lVQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAIn25ecmPKYg2Tc_0TmzvAf5FLXucVP-Z9bfNPbLRKAoAiEA3MDQxJIdOFtBteuEAsOjH1BOmzaZCYARg2FpPnosWfs%3D&title=Streamers+REACT+TO+summit1g+RAGE+%28PUNCHING+MONITOR%29++shro",
    livecount: "32.7k",
    imageurl: "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-300x300.png",
    gamename: "Fortnite",
    channelname: "Shroud",
    website: ""
  },
  {
    videourl: "https://r5---sn-4pvgq-n8ve.googlevideo.com/videoplayback?expire=1617963829&ei=1dZvYKnGI9DeyQXG0oXYCg&ip=2a0b%3A1587%3A4564%3Aa397%3A3add%3A1e46%3A1c05%3A30a7&id=o-AFiBnkgsJJg8Su_tN5nF03lJVSmVbYII5HFCI9U8YkwW&itag=22&source=youtube&requiressl=yes&mh=xN&mm=31%2C29&mn=sn-4pvgq-n8ve%2Csn-n8v7kn7r&ms=au%2Crdu&mv=m&mvi=5&pl=30&initcwndbps=221250&vprv=1&mime=video%2Fmp4&ns=8RVS94AzvKwsxuD4yMEoq5UF&ratebypass=yes&dur=34.017&lmt=1617005331632349&mt=1617941870&fvip=15&fexp=24001373%2C24007246&c=WEB&txp=6216222&n=C6Vs6aq5TSYbTQkc&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgKmYERqxedyJYs5-gm_mikzBxAtBiiuRoIaWx2dW9NLsCIAfbkTe7PqtHWce-rOiynFhqzHQxjSpDXKbFTiqQybe3&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgfBhsofHI4fnB-YKXd8PbejLg3QPeGeBNBxV1SK7WhtkCIQDTzGqDgYaeRlAGpPivAFikI5Ws_PUH1_6lCSca8_K-Cw%3D%3D&title=Reddit+Lucio+Clips+Streamer",
    livecount: "12.69k",
    imageurl: "https://images.unsplash.com/photo-1559969143-b2defc6419fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    gamename: "Monkey House",
    channelname: "Tribe Club",
    website: ""
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  play = (event: Event) => {
    (<HTMLVideoElement>(<HTMLDivElement>event.target).children[2]).play();

  }
  pause = (event: Event) => {
    (<HTMLVideoElement>(<HTMLDivElement>event.target).children[2]).pause();
  }
  toggleVolume = ()=>{
    if(this.volume){
      this.volume=0;
    }else{
      this.volume=1;
    }
  }
}
