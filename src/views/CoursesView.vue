<script setup lang="ts">
import { getLocalizedCourses } from '@/utils/i18n'
import type { FetchedCourse } from '@/utils/type'
import { useHead } from '@unhead/vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const lang = computed(() => (route.params.lang as 'ja' | 'en' | '') || 'en')
const fetchedCourses = ref<FetchedCourse[]>([])
fetch('https://yoshipi.microcms.io/api/v1/courses', {
  headers: {
    'X-MICROCMS-API-KEY': 'M765Iy72TsTyeYTEsFruOHbuySRg13C5DEy6',
  },
})
  .then((data) => data.json())
  .then((json) => {
    fetchedCourses.value = json.contents
  })
const courses = computed(() => getLocalizedCourses(lang.value, fetchedCourses.value))
useHead({
  title: courses.value.title,
})
</script>
<template>
  <main>
    <h2>{{ courses.title }}</h2>
    <div class="courses">
      <div v-for="course in courses.list" :key="course.id" class="course-container">
        <a :href="course.link">
          <div class="image-container">
            <img
              :srcset="`${course.image.url}?fit=crop&w=360&h=202&fm=webp&dpr=1 1x,
                ${course.image.url}?fit=crop&w=360&h=202&fm=webp&dpr=2 2x,
                ${course.image.url}?fit=crop&w=360&h=202&fm=webp&dpr=3 3x`"
              :src="`${course.image.url}?fit=crop&w=360&h=202&fm=webp`"
              :alt="course.title"
            />
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 8px;
            "
          >
            <p>{{ course.title }}</p>
            <p style="margin-right: 8px; opacity: 0.8; font-size: 14px">
              {{ course.durationHour }}
            </p>
          </div>
          <p style="font-size: 14px; margin-top: 8px; text-decoration: none">
            {{ course.description }}
          </p>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 24px;
  margin-bottom: 16px;
}
.courses {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 40px;
}
a {
  color: white;
  text-decoration: none;
}
.image-container {
  overflow: hidden;
  aspect-ratio: 16 / 9;
}
.image-container img {
  width: 100%;
  transition: all 0.3s ease;
}
.image-container:hover img {
  transform: scale(1.05);
  filter: brightness(0.8);
}
@media (width <= 610px) {
  .courses {
    grid-template-columns: repeat(1, 1fr);
  }
  h2 {
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 8px;
  }
}
@media (width <= 410px) {
  .image-container {
    margin: 0 -28px;
  }
}
</style>
