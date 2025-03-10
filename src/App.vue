<script setup lang="ts">
import LogoComp from '@/components/LogoComp.vue'
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { getLocalizedCourses } from './utils/i18n'
const route = useRoute()
const lang = computed(() => (route.params.lang as 'ja' | 'en' | '') || 'en')
const coursesTitle = computed(() => getLocalizedCourses(lang.value).title)
useHead({
  htmlAttrs: {
    lang,
  },
  link: [
    {
      rel: 'canonical',
      href: () => `https://yoshipi.me${lang.value === 'ja' ? '/ja' : ''}`,
    },
  ],
})
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home', params: { lang: $route.params.lang } }">
        <LogoComp class="logo" />
      </RouterLink>
      <div>
        <RouterLink :to="{ name: 'home', params: { lang: $route.params.lang } }" class="nav-item"
          >Yoshipi</RouterLink
        >
        <RouterLink
          :to="{ name: 'courses', params: { lang: $route.params.lang } }"
          class="nav-item"
          >{{ coursesTitle }}</RouterLink
        >
        <span class="lang">
          <RouterLink :to="{ name: $route.name, params: { lang: '' } }">en</RouterLink> |
          <RouterLink :to="{ name: $route.name, params: { lang: 'ja' } }">ja</RouterLink>
        </span>
      </div>
    </nav>
  </header>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <footer>
    <small>© {{ new Date().getFullYear() }} yoshipi</small>
  </footer>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-item {
  color: white;
  margin-right: 32px;
  font-size: 16px;
}
.lang {
  font-size: 15px;
}
.lang a {
  color: white;
}
.logo {
  width: 64px;
  height: 64px;
}
footer {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  margin-top: 40px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (width <= 1163px) {
  .logo {
    width: 40px;
    height: 40px;
  }
}
@media (width <= 440px) {
  .nav-item {
    margin-right: 16px;
    font-size: 14px;
  }
  .lang {
    font-size: 13px;
  }
}
</style>
