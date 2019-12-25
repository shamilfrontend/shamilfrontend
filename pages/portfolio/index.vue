<template>
  <div class="page pt-portfolio">
    <section class="container">
      <!-- Section Title -->
      <div class="header-page mt-70 mob-mt">
        <h2>Portfolio</h2>
        <span />
      </div>

      <!-- Portfolio Filter Row Start -->
      <div class="row mt-100">
        <div class="col-lg-12 col-sm-12 portfolio-filter">
          <ul>
            <li class="active" data-filter="*">All</li>
            <li data-filter=".brand">Brand</li>
            <li data-filter=".design">Design</li>
            <li data-filter=".graphic">Graphic</li>
          </ul>
        </div>
      </div>

      <!-- Portfolio Item Row Start -->
      <div class="row portfolio-items mt-100 mb-100">
        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 graphic">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-1.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Graphic</p>
              <i class="fas fa-image" />
              <a
                class="image-link"
                href="../../assets/img/portfolio/img-1.jpg"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 design">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-2.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Design</p>
              <i class="fas fa-image" />
              <a
                class="image-link"
                href="../../assets/img/portfolio/img-2.jpg"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 brand">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-3.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Graphic</p>
              <i class="fas fa-video" />
              <a
                class="video-link"
                href="https://www.youtube.com/watch?v=k_okcNVZqqI"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 graphic">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-4.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Design</p>
              <i class="fas fa-image" />
              <a
                class="image-link"
                href="../../assets/img/portfolio/img-4.jpg"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 design">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-5.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Design</p>
              <i class="fas fa-video" />
              <a
                class="video-link"
                href="https://www.youtube.com/watch?v=k_okcNVZqqI"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 brand">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-6.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Brand</p>
              <i class="fas fa-image" />
              <a
                class="image-link"
                href="../../assets/img/portfolio/img-6.jpg"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 graphic">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-7.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Brand</p>
              <i class="fas fa-image" />
              <a
                class="image-link"
                href="../../assets/img/portfolio/img-7.jpg"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 design">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-8.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Brand</p>
              <i class="fas fa-image" />
              <a
                class="image-link"
                href="../../assets/img/portfolio/img-8.jpg"
              />
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <div class="item col-lg-4 col-sm-6 brand">
          <figure>
            <img alt="" src="../../assets/img/portfolio/img-9.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Graphic</p>
              <i class="fas fa-image" />
              <a
                class="image-link"
                href="../../assets/img/portfolio/img-9.jpg"
              />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage'
}
</script>
