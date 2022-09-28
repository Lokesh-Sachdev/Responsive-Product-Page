"use strict";

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
let mainImg = document.getElementsByClassName(".main");
let smallImg = document.getElementsByClassName(".small-img");

if (bar) {
  bar.addEventListener("click", () => nav.classList.add("active"));
}

if (close) {
  close.addEventListener("click", () => nav.classList.remove("active"));
}

smallImg[0].addEventListener("click", () => (mainImg.src = smallImg[0].src));
smallImg[1].addEventListener("click", () => (mainImg.src = smallImg[1].src));
smallImg[2].addEventListener("click", () => (mainImg.src = smallImg[2].src));
