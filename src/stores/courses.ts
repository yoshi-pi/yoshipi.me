import { getLocalizedCourses } from '@/utils/i18n'
import type { FetchedCourse } from '@/utils/type'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
export const useCoursesStore = defineStore('pinia', () => {
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
  const route = useRoute()
  const lang = computed(() => (route.params.lang as 'ja' | 'en' | '') || 'en')
  const courses = computed(() => getLocalizedCourses(lang.value, fetchedCourses.value))
  return {
    fetchedCourses,
    lang,
    courses,
  }
})
