import { videoDetails } from "../data/video-infos.js";

let hidden = 1;
let theme = localStorage.getItem("theme") || "light" ;

function updateDisplay () {
   document.getElementById('apperance').innerText = `Apperance  :  ${theme}`;
   }
function renderVideoGrid () {
   let html = "";
   videoDetails.forEach(video => {
      html += `
         <div class="video-container" data-link= "${video.videoLink}">
            <div class="video-preview-container">
               <img src="thumbnails/thumbnail${video.id}.png" class="css-thumbnail">
               <div class="video-length">
                  ${video.videoStats.duration}
               </div>
            </div>
            <div class="video-info-grid">
               <div class="channel-pfp-container">
                  <a href="${video.channelLink}" target="_self" class="channel-link">
                     <img src="channel-pfp/channel${video.channelId}.jpg" class="channel-pfp">
                  </a>
               </div>
               <div class="video-stats-container">
                  <p class="video-title" title="${video.videoTitle}">
                     ${video.videoTitle}
                  </p>
                  <a href="${video.channelLink}" target="_self" class="channel-link">
                     <p class="video-author">${video.videoAuthor}</p>
                  </a>
                  <p class="video-stats">${video.videoStats.views} views &#183; ${video.videoStats.age} ago</p>
               </div>
            </div>
         </div>
      `
      document.querySelector('.video-grid').innerHTML = html ;
   });
   document.querySelectorAll('.video-container').forEach((button) => {
      button.addEventListener('click' , () => {
         let link = button.dataset.link;
         window.location = link ;
      })
   });

}

renderVideoGrid();

document.getElementById('js-settings-button').addEventListener('click' , () => {
   const elem = document.getElementById('js-menu-dropdown') ;
   if(hidden) {
      elem.classList.remove("settings-dropdown-hidden");
      elem.classList.add("settings-dropdown-active");
      hidden = 0 ;
      updateDisplay();
      window.addEventListener('click' , (Event) => {
         if (Event.target.id === "js-menu-dropdown"|| Event.target.id === "js-settings-button"|| Event.target.id === "3doticon") {
         
         }
         else if(Event.target.id === "apperance") {
            const elem = document.getElementById('js-menu-dropdown') ;
            elem.innerHTML =`<div>Dark</div><div>Light</div>`
         }
         else {
            elem.classList.remove("settings-dropdown-active");
            elem.classList.add("settings-dropdown-hidden");
            elem.innerHTML=`<div id="apperance">Apperance : </div>
               <div id="feedback">Feedback</div>`;
            hidden = 1 ;
         }
         
      })
   }
   else {
      elem.classList.remove("settings-dropdown-active");
      elem.classList.add("settings-dropdown-hidden");
      hidden = 1 ;
   }
   
});
