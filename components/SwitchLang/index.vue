<template>
  <ul class="switch-lang">
    <li
      v-for="language in languages"
      :key="language.value"
      class="switch-lang__item"
    >
      <button
        class="switch-lang__btn"
        :class="{ 'switch-lang__btn_active': language.value === selectedLang }"
        @click="handleLanguageChange(language.value)"
      >
        {{ language.label }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SwitchLang',

  data: () => ({
    selectedLang: 'ru',
    languages: [
      {
        label: 'Rus',
        value: 'ru'
      },
      {
        label: 'Eng',
        value: 'en'
      }
    ]
  }),

  methods: {
    handleLanguageChange(value) {
      this.selectedLang = value
    }
  }
}
</script>

<style lang="scss" scoped>
/* Language */
.switch-lang {
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 1;
  transform: rotate(90deg);
  margin: 0;

  &__item {
    display: inline-block;
    margin: 0 10px;
  }

  &__btn {
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    color: #d2d2d2;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.5s ease;

    &_active {
      color: #fff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    }

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 575px) {
    top: unset;
    bottom: 40px;
    left: -20px;
    font-size: 10px;
  }
}
</style>
