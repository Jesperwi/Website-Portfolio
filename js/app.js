const Icon = document.querySelector('.burger');
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');

Icon.addEventListener('click', () => {
    links.classList.toggle('change');
    burger.classList.toggle('change');

});

// Project text function 
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0
    this.period = parseInt(period, 10) || 5000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

// Text loop from string and makes delete function
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 0);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 400 - Math.random() * 100;
  
    if (!this.isDeleting && this.txt === fullTxt) {
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".txt-rotate > .wrap { border-right: solid #666 }";
    document.body.appendChild(css);
  };
