"use strict";

const $ = selector => document.querySelector(selector);

function enlargeImage(element) {
    element.classList.toggle('enlarged-img');
    element.classList.toggle('img-box');
    element.nextElementSibling.classList.toggle('vanish');
}