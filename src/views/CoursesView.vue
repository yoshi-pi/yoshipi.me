<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref } from 'vue'
import { useCoursesStore } from '@/stores/courses'
const coursesStore = useCoursesStore()
useHead({
  title: coursesStore.courses.title,
})
const isLoaded = ref(false)
function loaded() {
  isLoaded.value = true
}
</script>
<template>
  <main>
    <h2>{{ coursesStore.courses.title }}</h2>
    <div v-if="!isLoaded" style="height: 800px"></div>
    <Transition name="fade-course">
      <div v-show="isLoaded" class="courses">
        <div v-for="course in coursesStore.courses.list" :key="course.id" class="course-container">
          <a :href="course.link">
            <div class="image-container">
              <img
                :srcset="`${course.image.url}?fit=crop&w=360&h=202&fm=webp&dpr=1 1x,
                ${course.image.url}?fit=crop&w=360&h=202&fm=webp&dpr=2 2x,
                ${course.image.url}?fit=crop&w=360&h=202&fm=webp&dpr=3 3x`"
                :src="`${course.image.url}?fit=crop&w=360&h=202&fm=webp`"
                :alt="course.title"
                @load="loaded"
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
    </Transition>
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
.fade-course-enter-active {
  transition: opacity 1s ease;
}
.fade-course-enter-from {
  opacity: 0;
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
