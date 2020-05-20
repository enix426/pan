"use strict";

console.log("je suis dans le main");

let pan = new panel;

let menuHamburger = document.querySelector(".w3-button");
let close = document.getElementById("close");

console.log(close);


  
 menuHamburger = document.addEventListener("click", function(){
    pan.open();
  });

  close = document.addEventListener("click", function(){
    pan.close();

  });



