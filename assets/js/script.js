'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
function toggleFullscreen() {
  var elem = document.getElementById("game-container");
  if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
      }
  }
}

let gamePlays = parseInt(localStorage.getItem('gamePlays')) || 0;

    // Get all "Play Now" link elements
    const playNowLinks = document.querySelectorAll('.card-title');

    // Get the paragraph element where the game play count will be displayed
    const gamePlayedParagraph = document.getElementById('GamePlayed');

    // Display the initial game play count
    gamePlayedParagraph.textContent = gamePlays;

    // Add click event listeners to all "Play Now" links
    playNowLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Increment game play count
            gamePlays++;

            // Update the displayed count
            gamePlayedParagraph.textContent = gamePlays;

            // Store the updated game play count in local storage
            localStorage.setItem('gamePlays', gamePlays);
        });
    });
    function toggleFullscreen() {
      var elem = document.getElementById("game-container");
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
    }
  
    function toggleSound() {
      var soundImg = document.getElementById("sound-img");
      var gameFrame = document.getElementById("game-frame");
      if (gameFrame.muted) {
        gameFrame.muted = false;
        soundImg.src = "sound-on-icon.png";
      } else {
        gameFrame.muted = true;
        soundImg.src = "sound-off-icon.png";
      }
    }