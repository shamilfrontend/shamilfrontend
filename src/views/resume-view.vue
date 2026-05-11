<script setup lang="ts">
import ContentShell from '../components/content-shell.vue';
import { educationItems, experienceItems, skills } from '../data/profile';
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>Резюме</h2>
      <span class="page-head__line" />
    </section>

    <div class="resume-grid">
      <section>
        <h3 class="section-title">Образование</h3>
        <article
          v-for="item in educationItems"
          :key="item.title"
          class="resume-card resume-card--pink"
        >
          <p class="resume-card__period">{{ item.period }}</p>
          <h4>{{ item.title }}</h4>
          <p>{{ item.place }}</p>
        </article>
      </section>

      <section>
        <h3 class="section-title">Опыт</h3>
        <article
          v-for="item in experienceItems"
          :key="item.title"
          class="resume-card resume-card--blue"
        >
          <p class="resume-card__period">{{ item.period }}</p>
          <h4>{{ item.title }}</h4>
          <p>{{ item.place }}</p>
        </article>
      </section>
    </div>

    <div class="skills-block">
      <section>
        <h3 class="section-title">Ключевые навыки</h3>
        <div class="skills-block__content">
          <article v-for="skill in skills" :key="skill.title" class="skill-chip">
            <span>{{ skill.title }}</span>
            <span class="skill-chip__arrow">›</span>
          </article>
        </div>
      </section>
    </div>
  </ContentShell>
</template>

<style scoped lang="scss">
.skills-block {
  padding: 0 34px 26px;

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 8px 14px;
  border-radius: 10px;
  background: #e8edf2;
  color: #27313d;
  font-size: 16px;
  line-height: 1;
}

.skill-chip__arrow {
  color: #51667f;
}

@media (max-width: 1024px) {
  .skills-block {
    padding: 0 18px 20px;
  }

  .skill-chip {
    font-size: 14px;
    min-height: 34px;
    padding: 6px 12px;
    border-radius: 8px;
    gap: 8px;
  }
}
</style>
