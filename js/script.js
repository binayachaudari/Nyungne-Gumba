/**
 * Navbar Function
 */

const navbar = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav__links');

  const navLinks = document.querySelectorAll('.nav__links li');
  const burgerLines = burger.querySelectorAll('div');

  burger.addEventListener('click', (e) => {
    burgerLines.forEach(line => line.style.transition = 'all ease 0.5s');
    nav.style.transition = 'all ease 0.5s';
    nav.style.WebkitTransition = 'all ease 0.5s';
    nav.style.MozTransition = 'all ease 0.5s';

    burger.classList.toggle('toggle');
    nav.classList.toggle('nav__active')
  });

  navLinks.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      let activeNav = documen.querySelector('.nav__links li.active');
      if (activeNav) {
        activeNav.classList.remove('active')
      }
      burger.addEventListener('click', (e) => {
        activeNav = document.querySelector('li.active');
        if (activeNav) {
          activeNav.classList.remove('active');
        }
      })

      navItem.classList.add('active');
    });
  })

}


// Initialize and add the map
function initMap() {
  // The location of Bouddha
  var stupa = { lat: 27.7222921, lng: 85.3552028 };
  // The map, centered at Bouddha
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 14, center: stupa });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: stupa, map: map });
}

navbar()