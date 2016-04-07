var $banner = $('.banner');
var $star;
var width = $banner.outerWidth();
var height = $banner.outerHeight();

for (i = 0, i < 75, i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    top: Math.random() * height,
    left: Math.random() * width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });
  $banner.append($star);

}
