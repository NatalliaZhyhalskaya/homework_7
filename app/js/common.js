

function down()
{
let a = document.querySelectorAll('.aaa');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}

function downB()
{
let a = document.querySelectorAll('.bbb');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}

function downC()
{
let a = document.querySelectorAll('.ccc');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}

function downD()
{
let a = document.querySelectorAll('.ddd');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}

function downE()
{
let a = document.querySelectorAll('.eee');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}


function downF()
{
let a = document.querySelectorAll('.fff');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}


function downAl()
{
let a = document.querySelectorAll('.aaal');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}
function downBl()
{
let a = document.querySelectorAll('.bbbl');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}
function downCl()
{
let a = document.querySelectorAll('.cccl');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}
function downDl()
{
let a = document.querySelectorAll('.dddl');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}
function downEl()
{
let a = document.querySelectorAll('.eeel');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}
function downFl()
{
let a = document.querySelectorAll('.fffl');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'none' )
a[i].style.display = 'block'
else
a[i].style.display = 'none';
}
}



let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let circles = document.querySelectorAll('#circles .circle');
let currentCircle = 0;
let circleInterval = setInterval(nextCircle,3000);
 
function nextCircle() {
    circles[currentCircle].className = 'circle';
    currentCircle = (currentCircle+1)%circles.length;
    circles[currentCircle].className = 'circle show';
}



let cards = document.querySelectorAll('#slider-cards .card');
let currentCard = 0;



function nextCard() {
    goToCard(currentCard+1);
}
 
function previousCard() {
    goToCard(currentCard-1);
}
 
function goToCard(n) {
    cards[currentCard].className = 'card';
    currentCard = (n+cards.length)%cards.length;
    cards[currentCard].className = 'card showed';
}



let next = document.getElementById('next');
let previous = document.getElementById('previous');
 
next.onclick = function() {
    
    nextCard();
};
previous.onclick = function() {
    
    previousCard();
};

$('.mobile_menu_click').click(function(){
    $('.menu__category').fadeToggle();
 });


 (function downMenu() {
     const burger = document.querySelector('.menu-hamburger');
     burger .addEventListener('click', () =>{
         burger.classList.toggle('menu-hamburger-close');
     })
 }());

