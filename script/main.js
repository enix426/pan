"use strict";

console.log("je suis dans le main");

let pan = new panel;

let menuHamburger = document.querySelector(".w3-button");
let close = document.getElementById("close");

console.log(close);


  
 menuHamburger.addEventListener("click", function(){
    pan.open();
  });

  close.addEventListener("click", function(){
    pan.close();

  });





