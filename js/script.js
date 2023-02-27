// navigation observer
const header = document.querySelector("header");
const section1 = document.querySelector(".hero");

const section1Options = {
  rootMargin: "-175px 0px 0px 0px"
}

const section1Observer = new IntersectionObserver(function(
  entries, 
  section1Observer
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    }
    else {
      header.classList.remove('nav-scrolled');
    }
  });
}, 
section1Options);

section1Observer.observe(section1)

document.querySelector(".hero-btn").addEventListener("click", function() {
  window.scrollBy(0, 670);
});
// .navigation observer


// video player
var video = document.querySelector('.abt-video');
var clicked = false;
var vidbtn = document.querySelector("#play-pause-icon");
var ppbtn = document.getElementById("play-pause");

function play_pause() {
  if ( document.getElementById('play-pause-icon').className == "btn-pause" ) {
    vidbtn.classList.remove('btn-pause');
    vidbtn.classList.add('btn-play');
    video.pause()
    ppbtn.setAttribute('title', 'Play');
  }
  else if ( document.getElementById('play-pause-icon').className == "btn-play" ) {
    vidbtn.classList.remove('btn-play');
    vidbtn.classList.add('btn-pause');
    video.play()
    ppbtn.setAttribute('title', 'Pause');
  }
}

document.querySelector('#play-pause').addEventListener('click', function() {
  play_pause();
} );

video.addEventListener('click', function() {
  play_pause();
});

document.querySelector(".c-video").addEventListener('mouseover', function() {
  document.querySelector(".controls").style.visibility="visible";
  document.querySelector(".controls").style.transition="1.5s";
});
document.querySelector(".c-video").addEventListener('mouseout', function() {
  document.querySelector(".controls").style.visibility="hidden";
  document.querySelector(".controls").style.transition="1.5s";
});

var speaker = document.getElementById('speaker');
var speak_img = document.getElementById('volume-img');

speaker.addEventListener('click', function() {
  video.muted = !video.muted;
  if (video.muted == true) {
    speak_img.setAttribute('src', '/img/mute.png');
  }
  else if(video.muted == false) {
    speak_img.setAttribute('src', '/img/speaker.png');
  }
  
})
video.onended = function () {
  vidbtn.classList.remove('btn-pause');
  vidbtn.classList.add('btn-play');
  ppbtn.setAttribute('title', 'Play');
}
// .video player