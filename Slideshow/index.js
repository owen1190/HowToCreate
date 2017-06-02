var slideIndex = 1;
showSlides(slideIndex);
//点击箭头事件
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//点击点时事件
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {  
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // 最后一张点击右箭头，则返回到第一张
  if (n > slides.length) {slideIndex = 1} 
  // 第一张点击左箭头，则返回最后一张
  if (n < 1) {slideIndex = slides.length}
  // 隐藏所有照片
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // 显示照片，并改变点的状态
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}