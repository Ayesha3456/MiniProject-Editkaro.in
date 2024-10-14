function filterVideos(category) {
  const videos = document.querySelectorAll('.video-item');

  videos.forEach(video => {
      if (category === 'all' || video.classList.contains(category)) {
              video.style.display = 'block';
          } else {
              video.style.display = 'none';
                }
  });
}

$(document).ready(function () {
  // Smooth scrolling for navigation links
  $('.nav-link').on('click', function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800);
      }
  });
});