<template>
  <ul class="the-social">
    <li class="the-social__item">
      <a
        href="https://github.com/shamilfrontend"
        target="_blank"
        class="the-social__link"
      >
        <i class="the-social__icon fab fa-github"></i>
      </a>
    </li>
    <li class="the-social__item">
      <a
        href="https://www.facebook.com/shamilfrontend"
        target="_blank"
        class="the-social__link"
      >
        <i class="the-social__icon fab fa-facebook-f"></i>
      </a>
    </li>
    <li class="the-social__item">
      <a
        href="https://vk.com/shamilfrontend"
        target="_blank"
        class="the-social__link"
      >
        <i class="the-social__icon fab fa-vk"></i>
      </a>
    </li>
    <li class="the-social__item">
      <a
        href="https://twitter.com/shamilfrontend"
        target="_blank"
        class="the-social__link"
      >
        <i class="the-social__icon fab fa-twitter"></i>
      </a>
    </li>
    <li class="the-social__item">
      <a
        href="https://www.instagram.com/shamilfrontend/"
        target="_blank"
        class="the-social__link"
      >
        <i class="the-social__icon fab fa-instagram"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TheSocial'
}
</script>

<style lang="scss" scoped>
.the-social {
  position: absolute;
  width: 40px;
  top: 20px;
  right: 20px;
  z-index: 1;

  &__item {
    text-align: center;
  }

  &__icon {
    color: #fff;
    width: 40px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
