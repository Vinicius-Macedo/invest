export const slider = document.getElementById('slider-container');
export const carrosselLeft = document.getElementById('icon-left');
export const carrosselRight = document.getElementById('icon-right');

export const slider2 = document.getElementById('slider-container2');
export const carrosselLeft2 = document.getElementById('icon-left2');
export const carrosselRight2 = document.getElementById('icon-right2');

export const slider3 = document.getElementById('slider-container3');
export const carrosselLeft3 = document.getElementById('icon-left3');
export const carrosselRight3 = document.getElementById('icon-right3');

export function slideElements() {
  if (window.innerWidth >= 600) {
    return 2;
  }
  return 6;
}

var atual = 0;

export function sliderChange(moveRight) {

  
  if (moveRight == true) {

    atual++;

    if (atual < slideElements()) {
      slider.style.transform = "translate(-" + (atual * 100) +"%)";
    }
    else {
      slider.style.transform = "translate(0%)";
      atual = 0;
    }
  }
  
  else {
    atual -= 1;

    if (atual >= 0) {
      slider.style.transform = "translate(-" + (atual * 100) +"%)";
    }
    else {
      atual = slideElements() - 1;
      slider.style.transform = "translate(-" + (atual * 100) +"%)";
    }
  }
}


// SLIDE 2

export function slideElements2() {
  if (window.innerWidth >= 1024) {
    return 3;
  }
  return 5;
}

var atual = 0;

export function sliderChange2(moveRight) {

  
  if (moveRight == true) {

    atual++;

    if (atual < slideElements2()) {
      slider2.style.transform = "translate(-" + (atual * 100) +"%)";
    }
    else {
      slider2.style.transform = "translate(0%)";
      atual = 0;
    }
  }
  
  else {
    atual -= 1;

    if (atual >= 0) {
      slider2.style.transform = "translate(-" + (atual * 100) +"%)";
    }
    else {
      atual = slideElements2() - 1;
      slider2.style.transform = "translate(-" + (atual * 100) +"%)";
    }
  }
}

// SLIDE 3

export function slideElements3() {
  if (window.innerWidth >= 600) {
    return 2;
  }
  return 4;
}

var atual = 0;

export function sliderChange3(moveRight) {

  
  if (moveRight == true) {

    atual++;

    if (atual < slideElements3()) {
      slider3.style.transform = "translate(-" + (atual * 100) +"%)";
    }
    else {
      slider3.style.transform = "translate(0%)";
      atual = 0;
    }
  }
  
  else {
    atual -= 1;

    if (atual >= 0) {
      slider3.style.transform = "translate(-" + (atual * 100) +"%)";
    }
    else {
      atual = slideElements3() - 1;
      slider3.style.transform = "translate(-" + (atual * 100) +"%)";
    }
  }
}