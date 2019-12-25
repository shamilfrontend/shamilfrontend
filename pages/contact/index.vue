<template>
  <div class="page pt-contact">
    <section class="container">
      <!-- Section Title -->
      <div class="header-page mt-70 mob-mt">
        <h2>Contact</h2>
        <span />
      </div>

      <!-- Form Start -->
      <div class="row mt-100">
        <div class="col-lg-12 col-sm-12">
          <div class="contact-form ">
            <form id="contact-form" method="post" class="box-1 contact-valid">
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Name *"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email *"
                  />
                </div>
                <div class="col-lg-12 col-sm-12">
                  <textarea
                    id="note"
                    class="form-control"
                    name="note"
                    placeholder="Your Message"
                  />
                </div>
                <div class="col-lg-12 col-sm-12 text-center">
                  <button type="submit" class="btn-st">
                    Send Message
                  </button>
                  <div id="loader">
                    <i class="fas fa-sync" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="error-messages">
                    <div id="success">
                      <i class="far fa-check-circle" />Thank you, your message
                      has been sent.
                    </div>
                    <div id="error">
                      <i class="far fa-times-circle" />Error occurred while
                      sending email. Please try again later.
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="box-2 contact-info">
        <div class="row">
          <div class="col-lg-4 col-sm-12 info">
            <i class="fas fa-paper-plane" />
            <p>example@example.com</p>
            <span>Email</span>
          </div>
          <div class="col-lg-4 col-sm-12 info">
            <i class="fas fa-map-marker-alt" />
            <p>123 Lorem Ipsum, USA</p>
            <span>Addres</span>
          </div>
          <div class="col-lg-4 col-sm-12 info">
            <i class="fas fa-phone" />
            <p>(+1) 123 456 7890</p>
            <span>Phone</span>
          </div>
        </div>
      </div>

      <!--Google Map Start-->
      <div class="google-map box-1 mt-100 mb-100">
        <div class="row">
          <div class="col-lg-12">
            <div
              id="map"
              data-latitude="40.712775"
              data-longitude="-74.005973"
              data-zoom="14"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>
