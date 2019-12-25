<template>
  <div class="pt-home">
    <div class="addition-bg">
      <div class="slide-kenburns-bg">
        <div class="slide-kenburns slide-kenburns-1"></div>
        <div class="slide-kenburns slide-kenburns-2"></div>
        <div class="slide-kenburns slide-kenburns-3"></div>
        <div class="slide-kenburns slide-kenburns-4"></div>
      </div>
    </div>

    <section>
      <div class="banner">
        <h1>Shamil Alisultanov</h1>
        <p class="cd-headline rotate-1">
          Hi! I'm a frontend developer from Moscow :-)
        </p>
      </div>

      <div class="lang">
        <ul>
          <li><a href="#" class="active">eng</a></li>
          <li><a href="#">rus</a></li>
        </ul>
      </div>

      <div class="social">
        <ul>
          <li v-for="(item, index) in socialLinks" :key="index">
            <a :href="item.link" target="_blank">
              <i :class="`fab ${item.icon}`" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  components: {},

  data: () => ({
    socialLinks: [
      {
        link: 'https://github.com/shamilfrontend',
        icon: 'fa-github'
      },
      {
        link: 'https://vk.com/shamilfrontend',
        icon: 'fa-vk'
      },
      {
        link: 'https://github.com/shamilfrontend',
        icon: 'fa-twitter'
      },
      {
        link: 'https://www.instagram.com/shamilfrontend/',
        icon: 'fa-instagram'
      },
      {
        link: 'https://www.facebook.com/shamilfrontend',
        icon: 'fa-facebook-f'
      },
      {
        link: 'https://www.youtube.com/channel/UCGAfPMDJP2ORgoOcTRpoLzw',
        icon: 'fa-youtube'
      }
    ]
  })
}
</script>
