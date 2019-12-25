<template>
  <div class="the-preloader">
    <div class="loading">
      <div class="circle"></div>
      <div class="text-loading">
        <span data-text-preloader="S" class="letters">S</span>
        <span data-text-preloader="H" class="letters">H</span>
        <span data-text-preloader="A" class="letters">A</span>
        <span data-text-preloader="M" class="letters">M</span>
        <span data-text-preloader="I" class="letters">I</span>
        <span data-text-preloader="L" class="letters">L</span>
        <span data-text-preloader="F" class="letters">F</span>
        <span data-text-preloader="R" class="letters">R</span>
        <span data-text-preloader="O" class="letters">O</span>
        <span data-text-preloader="N" class="letters">N</span>
        <span data-text-preloader="T" class="letters">T</span>
        <span data-text-preloader="E" class="letters">E</span>
        <span data-text-preloader="N" class="letters">N</span>
        <span data-text-preloader="D" class="letters">D</span>
        <span data-text-preloader="." class="letters">.</span>
        <span data-text-preloader="R" class="letters">R</span>
        <span data-text-preloader="U" class="letters">U</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThePreloader'
}
</script>

<style lang="scss" scoped>
.the-preloader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  /*display: none;*/
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: none;

  .loading {
    position: absolute;
    z-index: 100;

    .circle {
      width: 80px;
      height: 80px;
      margin: 0 auto 50px auto;
      border-radius: 50%;
      border: 3px solid rgba(0, 0, 0, 0.2);
      border-top-color: #1a2a41;
      animation: spinner 1s infinite linear;
    }

    .text-loading {
      font: bold 50px 'Poppins', sans-serif;
      text-align: center;
      user-select: none;

      .letters {
        position: relative;
        color: rgba(0, 0, 0, 0.2);

        &:nth-child(2):before {
          animation-delay: 0.2s;
        }

        &:nth-child(3):before {
          animation-delay: 0.4s;
        }

        &:nth-child(4):before {
          animation-delay: 0.6s;
        }

        &:nth-child(5):before {
          animation-delay: 0.8s;
        }

        &:nth-child(6):before {
          animation-delay: 1s;
        }

        &:before {
          content: attr(data-text-preloader);
          position: absolute;
          top: -1px;
          left: 0;
          color: #1a2a41;
          opacity: 0;
          transform: rotateY(-90deg);
          animation: letters-loading 4s infinite;
        }
      }
    }
  }
}
</style>
