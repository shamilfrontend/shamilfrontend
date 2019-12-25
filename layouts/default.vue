<template>
  <div>
    <div class="header-mobile">
      <a class="header-toggle">
        <i class="fas fa-bars" />
      </a>
      <h2>ShamilFrontend.ru</h2>
    </div>

    <!-- Left Block -->
    <nav class="header-main">
      <div class="logo">
        <nuxt-link to="/">
          <img
            src="https://anonyviet.com/wp-content/uploads/2018/01/5aae503e4f037a5a4375944d8861fb6a.png"
            alt="logo"
            style="width: 70px;"
          />
        </nuxt-link>
      </div>

      <ul>
        <li data-tooltip="home" data-position="top">
          <nuxt-link to="/" class="icon-h fas fa-house-damage" />
        </li>
        <li data-tooltip="about" data-position="top">
          <nuxt-link to="/about" class="icon-a fas fa-user-tie" />
        </li>
        <li data-tooltip="resume" data-position="top">
          <nuxt-link to="/resume" class="icon-r fas fa-address-book" />
        </li>
        <li data-tooltip="portfolio" data-position="top">
          <nuxt-link to="/portfolio" class="icon-p fas fa-briefcase" />
        </li>
        <li data-tooltip="blog" data-position="top">
          <nuxt-link to="/blog" class="icon-b fas fa-receipt" />
        </li>
        <li data-tooltip="contact" data-position="bottom">
          <nuxt-link to="/contact" class="icon-c fas fa-envelope" />
        </li>
      </ul>

      <!-- Sound wave -->
      <a class="music-bg">
        <div class="lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <p>Sound</p>
      </a>
    </nav>

    <nuxt />
  </div>
</template>

<script>
// import ThePreloader from '@/components/ThePreloader'

export default {
  components: {},

  data: () => ({
    isLoading: true
  }),

  mounted() {
    this.$nextTick(() => {
      this.isLoading = false
    })
  }
}
</script>
