let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

showSlide();





  // Countdown functionality
  var countdownElement1 = document.getElementById('countdown1');
  var countdownElement2 = document.getElementById('countdown2');
  var countdownElement3 = document.getElementById('countdown3');
  var countdownElement4 = document.getElementById('countdown4');
  
  function countdown() {
    var count1 = parseInt(countdownElement1.textContent);
    var count2 = parseInt(countdownElement2.textContent);
    var count3 = parseInt(countdownElement3.textContent);
    var count4 = parseInt(countdownElement4.textContent);
    
    countdownElement1.textContent = count1 + 1;
    countdownElement2.textContent = count2 + 1;
    countdownElement3.textContent = count3 + 1;
    countdownElement4.textContent = count4 + 1;
    
    if (count1 > 80) {
      countdownElement1.textContent = ' 80 +';
    }
    
    if (count2 > 60) {
      countdownElement2.textContent = '60 +';
    }
    
    if (count3 > 90) {
      countdownElement3.textContent = '90 +';
    }
    
    if (count4 > 70) {
      countdownElement4.textContent = '70 +';
      clearInterval(countdownInterval);
    }
  }
  
  countdown();
  var countdownInterval = setInterval(countdown, 30);




  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  