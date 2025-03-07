<script setup lang="ts">
import LogoComp from '@/components/LogoComp.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <LogoComp class="logo" />
      <div><RouterLink to="/">en</RouterLink> | <RouterLink to="/ja">ja</RouterLink></div>
    </nav>
  </header>
  <RouterView />
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
a {
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
  margin-top: 64px;
}
@media (width <= 1163px) {
  .logo {
    width: 40px;
    height: 40px;
  }
}
</style>
