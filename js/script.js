const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');

const navLinks = document.querySelectorAll('.nav__links li');
const burgerLines = burger.querySelectorAll('div');

const smoothScrollElements = document.querySelectorAll('.smoothscroll');

// Add the User Agent to the <html>
// will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
let doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

/**
 * Navbar Function
 */
const navbar = () => {
  burger.addEventListener('click', (e) => {
    e.preventDefault();

    burgerLines.forEach(line => line.style.transition = 'all ease 0.5s');

    nav.style.transition = 'all ease 0.5s';
    nav.style.WebkitTransition = 'all ease 0.5s';
    nav.style.MozTransition = 'all ease 0.5s';

    burger.classList.toggle('toggle');
    nav.classList.toggle('nav__active');

  });

  navLinks.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      let activeNav = document.querySelector('.nav__links li.active');

      if (activeNav) {
        activeNav.classList.remove('active');
      }

      item.classList.add('active');

      nav.classList.toggle('nav__active');

      burger.classList.toggle('toggle');

    });
  });
}

/**
 * Smooth Scrolling
 */
const smoothScroll = () => {

  smoothScrollElements.forEach((element) => {

    element.addEventListener('click', (e) => {
      e.preventDefault();

      let targetID = e.target.getAttribute('href');

      //JAVASCRIPT IMPLEMENTATION (not supported on ios Devices)
      // window.scrollTo({
      //   top: targetID === '#' ? 0 : document.querySelector(targetID).offsetTop - 70,
      //   behavior: 'smooth'
      // });

      //JQUERY IMPLEMENTATION 
      $('html, body').stop().animate({
        scrollTop: targetID === '#' ? 0 : $(targetID).offset().top - 70
      }, 800)

    });
  });
}


/* 
 * Menu on Scrolldown
 */
let menuOnScrolldown = () => {

  let menuTrigger = document.querySelector('header');
  menuTrigger.style.transition = 'all ease 0.5s'

  //Change NavBar on Scroll
  window.addEventListener('scroll', (e) => {
    window.scrollY > 50 ? menuTrigger.classList.add('opaque') : menuTrigger.classList.remove('opaque');

    //ScrollSpy JS Implementation 
    let scrollSpyItems = document.querySelectorAll('.nav__links ul li a')
    let fromTop = window.scrollY
    scrollSpyItems.forEach(link => {

      try {
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop + 70 && section.offsetTop + section.offsetHeight > fromTop + 70) {
          link.parentElement.classList.add('active')
        }
        else {
          link.parentElement.classList.remove('active');
        }
      } catch (error) {
        // statements to handle any exceptions
      }

    }); //End of Event Listener

  }); //End of forEach
}; //End of menuOnScroll Function



// Initialize and add the map
function initMap() {
  // The location of Bouddha
  let stupa = { lat: 27.7222921, lng: 85.3552028 };
  // The map, centered at Bouddha
  let map = new google.maps.Map(
    document.getElementById('map'), { zoom: 14, center: stupa });
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({ position: stupa, map: map });
}



navbar();
smoothScroll();
menuOnScrolldown();