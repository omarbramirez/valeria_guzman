

'use strict';
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
const menuArrow = window.getComputedStyle(document.querySelector('p'), ':before') .getPropertyValue('content');

// const main_slider = document.querySelector('#main_slider');

/*PAIR HEIGHT and WIDTH TO THE SLIDER CONTAINER WITH ABSOLUTE POSITIONED <LI> ELEMENTS*/
const autoSize = (ht1, ht2)=>{
    ht1.style.height= `${ht2.offsetHeight}px`;
    ht2.style.width= `${ht1.offsetWidth}px`;
};

/*ADD THE STATE TO ACTIVE BASED ON THE DATA-POSITION OF AN ELEMENT*/
const sliderActivation = e=>{
/*ADD ACTIVE CLASS TO A SELECTED ELEMENT*/
  const activation = (array,position) =>{
    array.map(a=>{
      a.classList.remove("active");
      if(a.dataset.position ==position) {
        a.classList.add("active");
        slide=a;
      };

  });
  };
  /*PREVENT WITH A BOOLEAN AND CHANGE TO ANOTHER SLIDE*/
      if(e.target.dataset.position){
        const selection = e.target.dataset.position;
        activation(dots, selection );
        activation(sliders, selection );
        };
    };

/*CONTROLLER*/
 if (slider) {
  autoSize(slider,slide);
   window.addEventListener('load', autoSize(slider,slide));
   window.addEventListener('resize', function(){autoSize(slider,slide)});
   nav.addEventListener('click',  p=>{
      p.preventDefault();
  /*PREVENT WITH A BOOLEAN AND CALL THE MAIN FUNCTIONS*/
      if(p.target.classList.contains('dot')){
      sliderActivation(p);
      autoSize(slider,slide);
    } else return;
   });
 };

 /*DEPLOY RESPOSNIVE MOBILE MENU*/
 hamburger.addEventListener ("click", function(e) {
   e.preventDefault();
   menu.classList.toggle('active');
   header.classList.toggle('active');
   content.map(e=> e.classList.toggle('active'));
   if(footer) footer.classList.toggle('active');
   if(_footer) _footer.classList.toggle('active');
   if(logoFooter) logoFooter.classList.toggle('active');
   if(slider) slider.classList.toggle('active');
      window.addEventListener('resize', function(){autoSize(slider,slide)});
 });
 /*DEPLOY RESPOSNIVE MOBILE SUB-MENU*/
submenuSelector.addEventListener ("click", function(e) {
 e.preventDefault();
 submenu.classList.toggle('active');
 console.log(menuArrow);
});
