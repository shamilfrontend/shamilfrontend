<script setup lang="ts">
import ContentShell from '../components/content-shell.vue';
import { educationItems, experienceItems, skills } from '../data/profile';
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>Resume</h2>
      <span class="page-head__line" />
    </section>

    <div class="resume-grid">
      <section>
        <h3 class="section-title">Education</h3>
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
        <h3 class="section-title">Experience</h3>
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

    <section>
      <h3 class="section-title">Working Skills</h3>
      <div class="skills-grid">
        <article v-for="skill in skills" :key="skill.title" class="skill-row">
          <div class="skill-row__head">
            <span>{{ skill.title }}</span>
            <span>{{ skill.level }}%</span>
          </div>
          <div class="skill-row__bar">
            <span :style="{ width: `${skill.level}%` }" />
          </div>
        </article>
      </div>
    </section>
  </ContentShell>
</template>
