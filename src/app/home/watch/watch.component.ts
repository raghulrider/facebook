import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  
  like1=true;
  like2=false;
  data=[{
    Name:"Sarath",
    Follow:true,
    Date:"1 June",
    Caption:"Strom In The Sea Blue!😱",
    SubCaption:"",
    profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ3MVUWtjifSJrKfJHa0HftQLiiEaSbx4Kw&usqp=CAU",
    Video:"https://www.nhc.noaa.gov/video/DOLLY.mp4",
    Privacy:"public",
    Likes:"120k",
    Comments:320,
    Show:true
  },
  {
    Name:"Mano Bala",
    Follow:false,
    Date:"2 days ago",
    Caption:"Nature At Its Best🤝!!",
    SubCaption:"The wordld full of",
    profilePic:"https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    Video:"https://www.nhc.noaa.gov/video/otk_0313_hurricanestormsurge_sm.mov",
    Privacy:"settings",
    Likes:"10k",
    Comments:30,
    Show:true
  },
  {
    Name:"Bhaau",
    Follow:true,
    Date:"1 week ago",
    Caption:"Bay in the sea for the man with me🥴",
    SubCaption:"The wordld full of",
    profilePic:"https://images.unsplash.com/photo-1522728000856-8721ca26ccd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60",
    Video:"https://www.nhc.noaa.gov/video/SSHWS_animaton.mp4",
    Privacy:"public",
    Likes:"40k",
    Comments:358,
    Show:true

  },
]
  leftIconData1=[{
    icon:"ondemand_video",
    data:"Home"
  },{
    icon:"movie",
    data:"Shows"
  },{
    icon:"video_camera_back",
    data:"Live"
  },
  {
    icon:"bookmark",
    data:"Saved"
  }]
  leftIconData2=[{
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ3MVUWtjifSJrKfJHa0HftQLiiEaSbx4Kw&usqp=CAU",
    data:"Latest Videos"
  },{
    icon:"https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1022&q=80",
    data:"People Are Awesome"
  },{
    icon:"https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    data:"World News"
  },{
    icon:"https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    data:"BehindWoods Official"
  },{
    icon:"https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    data:"Flipkart Zone"
  },{
    icon:"https://images.unsplash.com/photo-1522728000856-8721ca26ccd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60",
    data:"Shopping Areas"
  },{
    icon:"https://images.unsplash.com/photo-1540922001719-299c282aeba0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60",
    data:"Friends Are Awesome"
  },{
    icon:"https://images.unsplash.com/photo-1541002670355-166b379db75d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60",
    data:"Be Like Bro"
  },{
    icon:"https://images.unsplash.com/photo-1540122995631-7c74c671ff8d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60",
    data:"We Are The Boys"
  },{
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQ3MVUWtjifSJrKfJHa0HftQLiiEaSbx4Kw&usqp=CAU",
    data:"Take A Slap"
  },{
    icon:"https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    data:"Part Of U"
  },{
    icon:"https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1022&q=80",
    data:"Soul In u"
  }]
  constructor() { }

  ngOnInit(): void {
  }
  likeButton(){
    this.like1=!this.like1;
    this.like2=!this.like2;
  }

}
