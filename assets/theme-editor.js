document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function() {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});

theme.logobar = (function() {
  this.$slideshow = null;
  
  function logoSlider(el, sectionId){
    var $slideshow = (this.$slideshow = $(el));
  	this.settings = {
      arrows: true,
      draggable: true,
      touchThreshold: 20,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    };
    this.mobileSettings = {
      arrows: true,
      draggable: true,
      touchThreshold: 20,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    if($(window).width() > 767) {
      $('.logo-bar').slick(this.settings);
    } else {
      $('.logo-bar').slick(this.mobileSettings);
    }
    
  }
  return logoSlider;
})();