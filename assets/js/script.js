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
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const aboutLink = document.getElementById('about-link');
  const modal = document.getElementById('about-modal');
  const closeBtn = document.querySelector('.close-btn');
  const headerBottom = document.querySelector('.header-bottom');

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    headerBottom.classList.add('blur');
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    headerBottom.classList.remove('blur');
  });

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
      headerBottom.classList.remove('blur');
    }
  });
});


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
    window.isLoggedIn = false;
    window.onload = function() {
      const loginMessage = document.getElementById('loginMessage');
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Access the global variable
  
      if (!isLoggedIn) {
          loginMessage.style.display = 'flex';
          toggleGameLinks(true);
      } else {
          loginMessage.style.display = 'none';
          toggleGameLinks(false);
      }
  };
  
    // Function to enable/disable game links
    function toggleGameLinks(disable) {
      const gameLinks = document.querySelectorAll('.featured-game-card a');
      gameLinks.forEach(function(link) {
        if (disable) {
          link.addEventListener('click', preventDefault);
          link.classList.add('disabled');
        } else {
          link.removeEventListener('click', preventDefault);
          link.classList.remove('disabled');
        }
      });
    }
    
    // Function to prevent default click action
    function preventDefault(event) {
      event.preventDefault();
    }
    
    // Call toggleGameLinks to initially disable game links
    toggleGameLinks(true);
    

    
    