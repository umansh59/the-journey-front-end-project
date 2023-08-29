let ch1 = document.getElementById("ch1");
let kurama = document.getElementById("kurama");
let minato = document.getElementById("minato");
let seal = document.getElementById("seal");
let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let f3 = document.getElementById("f3");



window.addEventListener('scroll', () => {
  let value = window.scrollY;

  ch1.style.left = value * 0.5 + 50 + 'px';
  kurama.style.left = value * -0.5 + 'px';
  seal.style.left = value * -0.5 + 700 + 'px';
  minato.style.right = value * -0.5 + 100 + 'px';
  f1.style.right = value * -0.5 + 'px';
  f2.style.left = value * -0.5 + 'px';
  f3.style.right = value * -0.5 + 'px';

  
});

