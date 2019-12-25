<template>
  <div class="menu">
    <div :class="butMenuClasses" @click="isOpen = !isOpen">
      <div class="line line-top"></div>
      <div class="line line-middle"></div>
      <div class="line line-bottom"></div>
    </div>
    <div class="menu-item but-about">
      <i
        class="fas fa-user-tie about-show"
        data-tooltip="about me"
        data-position="top"
      ></i>
    </div>
    <div class="menu-item but-resume">
      <i
        class="fas fa-address-book resume-show"
        data-tooltip="resume"
        data-position="right"
      ></i>
    </div>
    <div class="menu-item but-portfolio">
      <i
        class="fas fa-briefcase portfolio-show"
        data-tooltip="portfolio"
        data-position="right"
      ></i>
    </div>
    <div class="menu-item but-blog">
      <i
        class="fas fa-receipt blog-show"
        data-tooltip="blog"
        data-position="left"
      ></i>
    </div>
    <div class="menu-item but-contact">
      <i
        class="fas fa-envelope contact-show"
        data-tooltip="contact"
        data-position="left"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMenu',

  data: () => ({
    isOpen: false
  }),

  computed: {
    butMenuClasses() {
      return {
        'but-menu': true,
        'menu-toggle': this.isOpen
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  .but-menu,
  .menu-item {
    position: absolute;
    width: 70px;
    height: 70px;
    bottom: 25%;
    left: calc(50% - 40px);
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 15px 0 #fff;
    }
  }

  .but-menu {
    width: 80px;
    height: 80px;
    z-index: 5;
    transform: translateZ(0);

    .line {
      position: absolute;
      width: 28px;
      height: 4px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color: #2d2d2d;
      border-radius: 10px;
      transition: transform 0.3s ease, background 0.3s ease, opacity 0.3s ease,
        top 0.3s ease;
    }

    .line-top {
      top: -20px;
    }

    .line-bottom {
      top: 20px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
      z-index: -1;
      animation: point-bounce 1.5s infinite;
    }
  }

  .menu-item {
    width: 60px;
    height: 60px;
    margin: 10px;

    i {
      width: 60px;
      height: 60px;
      color: #1a2a41;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 50%;
    }
  }

  .menu-toggle {
    transform: translateZ(0);
    animation: bounce 1s ease-in-out;

    .line-top {
      top: 0;
      transform: rotate(45deg);
    }

    .line-middle {
      opacity: 0;
    }

    .line-bottom {
      top: 0;
      transform: rotate(-45deg);
    }

    & ~ .but-about {
      transform: translate3d(0px, -85px, 0);
    }
    & ~ .but-resume {
      transform: translate3d(85px, -30px, 0);
    }
    & ~ .but-portfolio {
      transform: translate3d(60px, 65px, 0);
    }
    & ~ .but-blog {
      transform: translate3d(-60px, 65px, 0);
    }
    & ~ .but-contact {
      transform: translate3d(-85px, -30px, 0);
    }
  }

  .hide {
    transform: translate3d(0, 0, 0);
  }
}

.about-toggle {
  transform: translate3d(0px, -85px, 0);
}

.resume-toggle {
  transform: translate3d(85px, -30px, 0);
}

.portfolio-toggle {
  transform: translate3d(60px, 65px, 0);
}

.blog-toggle {
  transform: translate3d(-60px, 65px, 0);
}

.contact-toggle {
  transform: translate3d(-85px, -30px, 0);
}
</style>
