window.ReviewSlider = () => {
  return {
    init() {
      // Trim whitespace on all rendered reviews ------------------------------
      var reviews = document.querySelectorAll(
        ".outerrevdiv .indrevdiv .indrevtxt"
      );
      reviews.forEach((review) => {
        review.innerText = review.innerText.trim();
      });

      // Change Yelp stars image to match blue stars --------------------------
      // This only works with 5 stars. There aren't many Google reviews with 4
      // stars, and there aren't even that many Yelp reviews total. But for now,
      // this at least makes them display the same style of stars.

      // Get Yelp review stars
      var yelpReviews = document.querySelectorAll(
        '.outerrevdiv .indrevdiv [class^="wprevpro_star_imgs_"]:has(img[data-src*="/plugins/wp-review-slider-pro/public/partials/imgs/stars_5_yellow.png"])'
      );

      yelpReviews.forEach((review) => {
        // Copy the div with 5 blue stars
        var blue5Stars = document
          .querySelector(
            '.outerrevdiv .indrevdiv [class^="wprevpro_star_imgs_"] > .wprevpro_star_imgs'
          )
          .cloneNode(true);

        // Append the new blue stars to the parent div
        review.appendChild(blue5Stars);
      });
    },
  };
};
