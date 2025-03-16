<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
const route = useRoute()
const isJapanese = computed(() => route.params.lang === 'ja')
useHead({
  title: 'Yoshipi',
})
</script>

<template>
  <main>
    <div class="profile-container">
      <h1 class="profile-name">
        <template v-if="isJapanese">よしぴー(Yoshipi)</template>
        <template v-else>Yoshipi</template>
      </h1>
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
      <p>
        <template v-if="isJapanese">
          <a href="https://www.udemy.com/user/yoshipi/">Udemy</a
          >でWeb系のプログラミングの講師をしています。受講をご希望の方は
          <RouterLink :to="{ name: 'courses', params: { lang: $route.params.lang } }"
            >Udemyコース一覧</RouterLink
          >のリンクから登録していただければクーポンが適用されますのでぜひご活用ください。私自身がプログラミングを何度か挫折しそうになった経験があり、その経験を元にあの時一番欲しかったなと思う講座を作成するようにしています。<a
            href="https://www.youtube.com/@yoshipi"
            >YouTube</a
          >にも講座の冒頭部分やオリジナルコンテンツを投稿しています。
        </template>
        <template v-else>
          I am a <a href="https://www.udemy.com/user/yoshipi/">Udemy</a> instructor for web
          programming courses, primarily for a Japanese audience. If you're interested in taking my
          courses, you can register through the link to the
          <RouterLink :to="{ name: 'courses', params: { lang: $route.params.lang } }"
            >Udemy Courses</RouterLink
          >, where a coupon will be applied. Having faced several setbacks in my own programming
          journey, I create courses based on the experience of what I felt I needed most at the
          time. I also post the introductory parts of my courses and original content on
          <a href="https://www.youtube.com/@yoshipi">YouTube</a>.
        </template>
      </p>
    </section>
    <section>
      <h2>🎨 Productions</h2>
      <p>
        <template v-if="isJapanese"
          ><a href="https://jsontocsvconv.com/">json to csv</a> /
          <a href="https://echoserver.dev/">echoserver</a> /
          <a href="https://www.amazon.co.jp/dp/B0DHX2BFZ6"
            >インターバルタイマー(Alexa Skill)</a
          ></template
        >
        <template v-else
          ><a href="https://jsontocsvconv.com/">json to csv</a> /
          <a href="https://echoserver.dev/">echoserver</a> /
          <a href="https://www.amazon.com/dp/B0DHX2BFZ6">Interval Timer(Alexa Skill)</a></template
        >
      </p>
    </section>
    <section>
      <h2>🎤 Hobby</h2>
      <template v-if="isJapanese"
        >散歩/旅行/サウナ/料理/カラオケ/お笑い/アニメ/カメラ(<a
          href="https://www.instagram.com/yoshipigram/"
          >instagram</a
        >)/個人開発/麻雀/ポーカー</template
      >
      <template v-else
        >Walking / Traveling / Sauna / Cooking / Karaoke / Comedy / Anime / Photography(<a
          href="https://www.instagram.com/yoshipigram/"
          >instagram</a
        >) / Indie Development / Mahjong / Poker</template
      >
    </section>
    <section>
      <h2>✉️ Contact</h2>
      <template v-if="isJapanese"
        ><a href="https://x.com/__yoshipi__">X（Twitter）</a
        >のDMを解放していますので、どうぞお気軽にご連絡ください。</template
      >
      <template v-else
        ><a href="https://x.com/__yoshipi__">X (Twitter)</a> DM is open, so feel free to contact
        me.</template
      >
    </section>
    <section>
      <h2>🛋️ Location</h2>
      <template v-if="isJapanese"
        >出身は関西で、現在は東京都内に在住しています。近くにお住まいの方は、ぜひカフェや飲みにでも気軽にお誘いください。</template
      >
      <template v-else
        >I live in Tokyo. If you're in the area, feel free to invite me for a casual coffee or
        drink!</template
      >
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
