import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  leftBarDatas = [
    {item: "Hari Haran", icon: "https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.6435-1/p148x148/145630507_2911264832488941_8149604583928497108_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=14aUO8FsbMwAX8C8Klb&_nc_oc=AQlVE6KkA9JPW3F1Xsm6IGCtXceYsJVGZD_JnygPHEwfRE1pgxeCaBp794SrBEQ411Y43ObkbBZ_fZozLIiAs0xn&_nc_ht=scontent.fmaa2-1.fna&tp=6&oh=6f360c13514e43f86f93952796c02910&oe=60931563"},
    {item: "COVID 19",  icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png"},
    {item: "Friends",  icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"},
    {item: "Most recent", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/vEc1FLp5rSK.png"},
    {item: "Favourites", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png"},
    {item: "Groups", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"},
    {item: "Marketplace", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"},
    {item: "Watch", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"},
    {item: "Events", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"},
    {item: "Memories", icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png"}
  ]

  contactDatas = [
    {name: "Suriya Prasath", 
    img: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/148592077_3841073729272834_3742001700723090793_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=rAzB59PcsqYAX9T58D5&edm=AHG7ALcAAAAA&ccb=7-4&oh=553c69262e30d02ce42bc00b7c17e0f7&oe=60962BF3&_nc_sid=5cbaad"},
    {name: "Sarath Kumar", 
    img: "https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p48x48/53468178_2293077474237055_4973428517946523648_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=wkoDfTrf254AX-RLnr5&_nc_ht=scontent.fmaa11-1.fna&tp=27&oh=ccec124be7c3c445251f73d58493a210&oe=60964C22"},
    {name: "Gokul Krish", 
    img: "https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/120731565_2875631919323615_8152242555784789092_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=OJVm_BfM69gAX_sOH4L&_nc_ht=scontent.fmaa11-1.fna&tp=27&oh=94580955aaf24326ede2dfd878019678&oe=6093B052"},
    {name: "Aishwarya Kotharu", 
    img: "https://media-exp1.licdn.com/dms/image/C5603AQFAENrKDCJUag/profile-displayphoto-shrink_100_100/0/1608120734128?e=1623283200&v=beta&t=yjBnkCuY1942-HCuuRSrX18w_HKe9ght4idbKUKTKL0"},
    {name: "Rahul", 
    img: "https://qph.fs.quoracdn.net/main-thumb-95194918-200-evychuiludotzrwsfaetmmfdmbdqlmaj.jpeg"},
    {name: "Rajini Nirmal", 
    img: "https://i.pinimg.com/236x/91/94/9b/91949b49fe56ee4ecf31df8c34f70f1d.jpg"},
    {name: "Roshini Sekar", 
    img: "https://www.whatsapp-dp-images.in/wp-content/uploads/2020/06/Best-Whatsapp-DP-Images-HD-Download-Whatsapp-DP-%E2%80%93-Latest-Free-Best-HD-Quality-Whatsapp-DP-Images-Download-4.jpg"},
    {name: "Vignesh Prasath", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsq_wS-wb4Opo7SkEswQH2KAxk-oC63OZgCQ&usqp=CAU"},
    {name: "Fareed Ahamed", 
    img: "https://static.statusqueen.in/dpimages/thumbnail/Happy_Holi_-1558.jpg"},
    {name: "Subramani", 
    img: "https://hindishayaricollection.com/wp-content/uploads/2019/09/smiley-2403198_960_720-300x245.jpg"},
    {name: "Haaris Infotech", 
    img: "https://static.statusqueen.in/dpimages/thumbnail/Hare_Rama-1553.jpg"},
    {name: "Hamsa Vardhan", 
    img: "https://readytricks.com/wp-content/uploads/2019/08/cute-profile-pic-1-300x300.jpg"},
    {name: "Kokila Elangovan", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8YmRnbc34GItHs2rO4qJYPpSgEqeh4ZjNg&usqp=CAU"},
    {name: "Haris Kumar", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVryhxoHi0gmlt2jUPeC6CXrtCbkG1FbMLw&usqp=CAU"},
    {name: "Joseph", 
    img: "https://www.parttimely.com/wp-content/uploads/2018/10/1-3-500x500.jpg"},
    {name: "Gowtham", 
    img: "https://ienglishstatus.com/wp-content/uploads/2016/11/Attitude-DP-1.jpg"}
  ];

  storiesData = [
    {bacimg: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXRzfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80", name: "Salia", icon: "https://pbs.twimg.com/profile_images/711687178921717760/DLSZLtLQ_400x400.jpg"},
    {bacimg: "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Monk", icon: "https://i.stack.imgur.com/owbPy.jpg"},
    { bacimg: "https://www.worldphoto.org/sites/default/files/default-media/Nova.jpg", name: "Max Hen", icon: "https://pbs.twimg.com/media/CqVCBF3UIAA1Sl5.jpg"},
    { bacimg: "https://expertphotography.com/wp-content/uploads/2019/10/surreal-portraits-closeup-of-man-with-face-paint.jpg", name: "Richo", icon:"https://i.pinimg.com/originals/45/c0/9b/45c09ba06ca52149ac6d7cd14d6c2de4.png"}
  ]

  postData = [
    {icon: "https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p48x48/53468178_2293077474237055_4973428517946523648_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=wkoDfTrf254AX-RLnr5&_nc_ht=scontent.fmaa11-1.fna&tp=27&oh=ccec124be7c3c445251f73d58493a210&oe=60964C22",
    name: "Sarath", time: "2 days ago", postImage: "https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.6435-9/55719229_2304744936403642_7779862386554437632_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_ohc=rD0HBsdcGRAAX8Lchnk&_nc_ht=scontent.fmaa11-1.fna&oh=65f746332f8f14ed9f9722695c3192b0&oe=6093CEF1", caption: "I'm a Handsome boy 😎 ", likes: "👍❤️😂 2.1k", comments: "231 comments"},
    {icon: "https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/120731565_2875631919323615_8152242555784789092_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=OJVm_BfM69gAX_sOH4L&_nc_ht=scontent.fmaa11-1.fna&tp=27&oh=94580955aaf24326ede2dfd878019678&oe=6093B052", name: "Krish Gokul", time: "3 months ago", postImage: "https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.6435-9/p843x403/55798189_1509927169142370_4449580041277276160_n.png?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oojdjyeZBDIAX_kXisL&_nc_ht=scontent.fmaa11-1.fna&_nc_tp=30&oh=9a5b31301322009a8c118152f5e6ea82&oe=6096FC5A", caption: "Started my career with CODA", likes: "👍❤️ 1.8k", comments: "173 comments"},
    {icon: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/148592077_3841073729272834_3742001700723090793_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=rAzB59PcsqYAX9T58D5&edm=AHG7ALcAAAAA&ccb=7-4&oh=553c69262e30d02ce42bc00b7c17e0f7&oe=60962BF3&_nc_sid=5cbaad", name: "Suriya Prasath", time: "just now", postImage: "https://media-exp1.licdn.com/dms/image/C4D03AQHX26-vRX5hJQ/profile-displayphoto-shrink_400_400/0/1593012077105?e=1623283200&v=beta&t=7tW0fzlNjghcBO7HUBQI1rBiXWi9ZXa9QDkTlFHDroc", caption: "I'm single and young uh..😈", likes: "👍❤️😂 2.2k", comments: "235 comments"}
  ]
  constructor() { }
}
