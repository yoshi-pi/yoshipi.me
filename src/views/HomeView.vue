<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { getLocalizedMessages } from '@/utils/i18n'
const route = useRoute()
const lang = computed(() => (route.params.lang as 'ja' | 'en' | '') || 'en')
const messages = computed(() => getLocalizedMessages(lang.value))
useHead({
  htmlAttrs: {
    lang,
  },
})
</script>

<template>
  <main>
    <div class="profile-container">
      <h1 class="profile-name">{{ messages.name }}</h1>
      <div class="profile-image-container">
        <img
          class="profile-image"
          src="@/assets/profile.jpg"
          alt="profile"
          width="150"
          height="150"
        />
      </div>
    </div>
    <section>
      <h2>💻 Work</h2>
      <p v-html="messages.work"></p>
    </section>
    <section>
      <h2>🎨 Productions</h2>
      <p v-html="messages.productions"></p>
    </section>
    <section>
      <h2>🎤 Hobby</h2>
      <p v-html="messages.hobby"></p>
    </section>
    <section>
      <h2>✉️ Contact</h2>
      <p v-html="messages.contact"></p>
    </section>
    <section>
      <h2>🛋️ Location</h2>
      <p v-html="messages.location"></p>
    </section>
  </main>
</template>
<style scoped>
.profile-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
}
.profile-name {
  font-size: 2.5rem;
}
.profile-image-container {
  border-radius: 50%;
  background: linear-gradient(319deg, #70f5cc, white);
  padding: 3px;
  width: 100px;
  height: 100px;
  margin-right: 200px;
}
.profile-image {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
section {
  margin-bottom: 32px;
}
h2 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}
@media (width <= 1163px) {
  .profile-container {
    margin: 0px;
    padding-top: 24px;
    height: 100px;
    justify-content: start;
  }
  .profile-name {
    font-size: 1.8rem;
  }
  .profile-image-container {
    padding: 3px;
    width: 55px;
    height: 55px;
    margin-right: 0px;
    margin-left: 50px;
  }
}
@media (width <= 410px) {
  .profile-name {
    font-size: 1.5rem;
  }
  .profile-image-container {
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }
}
@media (width <= 364px) {
  .profile-name {
    font-size: 1.3rem;
  }
  h2 {
    font-size: 1.1rem;
  }
}
</style>
