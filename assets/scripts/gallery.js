"use strict";

const container = document.getElementById("grid");
var currentImg = document.getElementById("current_img");
var gridCurrentImg = document.getElementById("grid_current_img");
const carrousel = document.getElementById("carrousel");
const leftArrow = document.getElementById('before');
const rightArrow = document.getElementById('after');
const credits = document.getElementById('credits');
const creditslink = document.getElementById('credits_link');
const img_fig = document.getElementById('img_fig');
// const closeBtn = document.getElementById('close');


const jeanMicha = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011'];
const juanCMejia = ['012', '013', '014', '015', '016', '017'];
const creditslinks = ['https://www.instagram.com/kao.nashi.photography/', 'https://www.instagram.com/pegasusecuador/']

const galleryBuilder = function(name, lname, id) {
  ////////////////////////*HTML IMAGE FORMAT TEMPLATE*/
  const _name = `${name}_${lname}`;
  let img = `
<div class="grid-item">
<img
src="assets/images/gallery/${_name.toLowerCase().replace(/ /g, "")}_${id}.jpg"
data-name="${name} ${lname}"
data_img="${id}">
</div>
`;

  ////////////////////////*INSERT A NEW IMAGE IN THE GALLERY*/
  container.insertAdjacentHTML('beforeend', img);
};

////////////////////////*CALL THE MAIN FUNCTION AUTOMATICALLY*/
jeanMicha.map(i => galleryBuilder('María José', 'Jean Juárez', i));
juanCMejia.map(i => galleryBuilder('Juan Carlos', 'Morales Mejia', i));

window.onload = () => {
  var msnry = new Masonry(container, {
    // options
    itemSelector: '.grid-item',
    "columnWidth": '.grid-item',
  });
};

////////////////////////*LOOP ANIMATION*/
const loader = document.querySelector("#loader").style;
window.addEventListener("load", function() {
  loader.opacity = 1;
  (function fade() {
    (loader.opacity -= .1) < 0 ? loader.display = "none" : setTimeout(fade, 40)
  })()
});

////////////////////////*EXPAND SELECTED IMAGE*/
container.addEventListener('click', function(e) {
  e.preventDefault;
  if (e.target.src) {
    const _currentImg = e.target.src;
    currentImg.src = _currentImg;
    carrousel.classList.add("active");
    container.classList.add("active");
    credits.innerHTML = `Créditos: ${e.target.dataset.name}`;
    if (e.target.dataset.name == 'María José Jean Juárez') {
      creditslink.setAttribute("href", creditslinks[0]);
    } else if (e.target.dataset.name == 'Juan Carlos Morales Mejia') {
      creditslink.setAttribute("href", creditslinks[1]);
    }
  }
});

////////////////////////*CLOSE CARROUSEL*/

carrousel.addEventListener('click', function(e) {
  e.preventDefault;
  if (e.target == img_fig || e.target == gridCurrentImg) {
    carrousel.classList.remove("active");
    container.classList.remove("active");
  };
});

/////////////////////////*CHANGE IMAGE IN CARROUSEL*/
carrousel.addEventListener('click', function(e) {
  e.preventDefault;

  const directions = ['before', 'after'];
  const _container = Object.values(container.children);
  var src = "";
  var author = " ";
  const test = function(a, n) {
    _container.map(a => {
      const img = (_container.indexOf(a));
      if (a.children[0].currentSrc === gridCurrentImg.children[0].currentSrc) {
        //main controller of gallery limits
        src = _container[img >= 0 && img <= 17 ? img + n : img].children[0].currentSrc;
        author = _container[img >= 0 && img <= 17 ? img + n : img].children[0].dataset.name;
      }
    });
    currentImg.src = src;
    credits.innerHTML = `Créditos: ${author}`;

  };

  if (e.target.id === directions[0]) {
    test(this, -1)
  };
  if (e.target.id === directions[1]) {
    test(this, 1)
  };

});


const slider = document.querySelector("#main_slider");
var slide = document.querySelector(".slide");
const nav = document.getElementById("sliderNav");
const [...dots] = document.getElementsByClassName("dot");
const [...sliders] = document.getElementsByClassName("slide");

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu_options");
const header = document.querySelector("header");
const submenuSelector = document.querySelector("#arrow");
const submenu = document.querySelector("#submenu_options");
const [...content] = document.getElementsByClassName("content");
const footer = document.querySelector("#footer");
const _footer = document.querySelector("#main_footer");
const logoFooter = document.querySelector("#logo_footer");



/*DEPLOY RESPOSNIVE MOBILE MENU*/
hamburger.addEventListener ("click", function(e) {
  console.log('working');
  e.preventDefault();
  menu.classList.toggle('active');
  header.classList.toggle('active');
  content.map(e=> e.classList.toggle('active'));
  if(footer) footer.classList.toggle('active');
  if(_footer) _footer.classList.toggle('active');
  if(logoFooter) logoFooter.classList.toggle('active');
});
/*DEPLOY RESPOSNIVE MOBILE SUB-MENU*/
submenuSelector.addEventListener ("click", function(e) {
e.preventDefault();
submenu.classList.toggle('active');
console.log(menuArrow);
});
