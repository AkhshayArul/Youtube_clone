const videoDetails1 = [{
   id : 1,
   videoLink :"https://www.youtube.com/watch?v=JYEwkMzXxG8",
   videoTitle : "Why Replacing Humans with AI is Going Horribly Wrong" ,
   videoStats : {
      views : "625K",
      age : "5 days" ,
      duration : "20:00"
   } ,
   channelId : 1
},{
   id : 2,
   videoLink :"https://www.youtube.com/watch?v=sr_qh33LsKQ",
   videoTitle : "Marino - Lust (feat. Alexandria)" ,
   videoStats : {
      views : "7.8 M",
      age : "2 weeks" ,
      duration : "1:55"
   } ,
   channelId : 2
},{
   id : 3,
   videoLink :"https://www.youtube.com/watch?v=enN_XHBlUeM",
   videoTitle : "Space Memes" ,
   videoStats : {
      views : "393 K",
      age : "1 year" ,
      duration : "17:04"
   } ,
   channelId : 3
},{
   id : 4,
   videoLink :"https://www.youtube.com/watch?v=ld3A3QCpXd4",
   videoTitle : "Why Jonathan Ross Can't Pronounce His Rs" ,
   videoStats : {
      views : "2.5 M",
      age : "12 year" ,
      duration : "3:15"
   } ,
   channelId : 4
}]
const channels = [{},{
   name: "Economy Media",
   channelLink : "https://www.youtube.com/@EconomyMedia"
},{
   name: "Marino",
   channelLink : "https://www.youtube.com/@MarinoMakesMusic"
 
},{
   name: "vaazkL" ,
   channelLink:"https://www.youtube.com/@VaazkLShorts"
},{
   name: "Tom Scott" ,
   channelLink:"https://www.youtube.com/@TomScottGo"
}]
class VideoDetails  {
   
   id ;
   videoLink ;
   videoTitle ;
   videoAuthor ;
   videoStats ;
   channelId ;
   channelLink ;
   constructor (details) {
      this.id = details.id;
      this.videoTitle =details.videoTitle;
      this.videoLink = details.videoLink;
      this.videoStats = details.videoStats;
      this.channelId = details.channelId;
      this.videoAuthor = channels[details.channelId]["name"];
      this.channelLink = channels[details.channelId]["channelLink"];
   }
}

export const videoDetails = videoDetails1.map(details => new VideoDetails(details)) ;