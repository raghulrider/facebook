import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-tournament',
  templateUrl: './suggested-tournament.component.html',
  styleUrls: ['./suggested-tournament.component.css']
})
export class SuggestedTournamentComponent implements OnInit {
  tournaments: any = [
    {
      poster: "https://mk0mainesportbamts2f.kinstacdn.com/wp-content/uploads/2018/05/Website-banner.png",
      type: "Open Cup Championship (Become a Pro)",
      time: "Fri, apr 16 at 6 pm utc+05:30",
      registered: 12
    },
    {
      poster: "https://mk0mainesportbamts2f.kinstacdn.com/wp-content/uploads/2018/05/Website-banner.png",
      type: "Winner gets a car",
      time: "Sat, apr 26 at 8 pm utc+05:30",
      registered: 32
    },
    {
      poster: "https://mk0mainesportbamts2f.kinstacdn.com/wp-content/uploads/2018/05/Website-banner.png",
      type: "Great Gamer of all time",
      time: "Fri, july 19 at 12 am utc+05:30",
      registered: 296
    },
    {
      poster: "https://mk0mainesportbamts2f.kinstacdn.com/wp-content/uploads/2018/05/Website-banner.png",
      type: "Champions League",
      time: "sun, may 02 at 12 pm utc+05:30",
      registered: 45
    },
    {
      poster: "https://mk0mainesportbamts2f.kinstacdn.com/wp-content/uploads/2018/05/Website-banner.png",
      type: "E-Sports Festival",
      time: "wed, may 09 at 11 am utc+05:30",
      registered: 9
    },
    {
      poster: "https://mk0mainesportbamts2f.kinstacdn.com/wp-content/uploads/2018/05/Website-banner.png",
      type: "Open Cup Championship (Become a Pro)",
      time: "wed, june 22 at 6 pm utc+05:30",
      registered: 33
    },
    {
      poster: "https://mk0mainesportbamts2f.kinstacdn.com/wp-content/uploads/2018/05/Website-banner.png",
      type: "Local Championship",
      time: "Fri, july 12 at 5.30 pm utc+05:30",
      registered: 21
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
