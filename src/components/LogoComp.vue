<script setup lang="ts">
import { ref } from 'vue'
const strokeDashoffsetStyles = ref({
  logo1: '1',
  logo2: '1',
  logo3: '1',
  logo4: '1',
})
const reverseClasses = ref({
  logo1: false,
  logo2: false,
  logo3: false,
  logo4: false,
})
for (const logo of ['logo1', 'logo2', 'logo3', 'logo4'] as const) {
  requestAnimationFrame(() => {
    strokeDashoffsetStyles.value[logo] = '0'
    function HideAndShowLogo() {
      setTimeout(() => {
        reverseClasses.value[logo] = true
        strokeDashoffsetStyles.value[logo] = '1'
        setTimeout(() => {
          reverseClasses.value[logo] = false
          strokeDashoffsetStyles.value[logo] = '0'
          HideAndShowLogo()
        }, 1400 + 1000) // 消える時間+消えてから表示する時間
      }, 3200 + 10000) // 表示する時間+次の消えるまでの時間
    }
    HideAndShowLogo()
  })
}
</script>
<template>
  <svg
    class="logo"
    width="220"
    height="220"
    viewBox="0 0 220 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :style="{ strokeDashoffset: strokeDashoffsetStyles.logo1 }"
      class="path-logo1"
      :class="{ 'path-logo1-reverse': reverseClasses.logo1 }"
      d="M62.4998 32C64.1671 36.6316 62 51.5 62 65C62 71.3031 65.7923 90.9027 69.4998 96C72.7847 100.516 79.4998 105 79.4998 105"
      stroke="white"
      stroke-width="13"
      stroke-linecap="round"
      pathLength="1"
    />
    <path
      :style="{ strokeDashoffset: strokeDashoffsetStyles.logo2 }"
      class="path-logo2"
      :class="{ 'path-logo2-reverse': reverseClasses.logo2 }"
      d="M112 37C112 37 100.87 65.676 92.5 83.5C84.2809 101.003 69.74 127.17 69.0272 128.451C69.0043 128.492 68.9915 128.515 68.968 128.556C68.4067 129.532 60.5622 143.057 53 149.5C48.0526 153.715 45.3163 156.967 39 158.5C34.4459 159.605 31.5473 159.633 27 158.5C22.2519 157.317 19.5652 155.852 16 152.5"
      stroke="white"
      stroke-width="13"
      stroke-linecap="round"
      pathLength="1"
    />
    <path
      :style="{ strokeDashoffset: strokeDashoffsetStyles.logo3 }"
      class="path-logo3"
      :class="{ 'path-logo3-reverse': reverseClasses.logo3 }"
      d="M155 69.5C155 69.5 164.468 65.4737 167 60C168.804 56.1013 167.512 52.7955 165.5 49C163.671 45.5496 159.5 43.5 155 43.5C145.382 43.5001 140.72 44.8902 131.5 49.5C124.5 53 124 54 115.5 59C110.005 62.2324 105.726 68.1663 105 74.5C104.313 80.4887 104.522 82.2594 107.5 87.5001C110.417 92.6325 113.158 94.8262 116 100C118.272 104.136 121 107 123 111.5C124.329 114.491 123.59 116.999 121 119C117.894 121.399 113 118.81 108.5 118C103.088 117.026 100.425 114.946 95.5 112.5C91.2307 110.38 88.9537 107.786 85.5 104.5"
      stroke="white"
      stroke-width="13"
      stroke-linecap="round"
      pathLength="1"
    />
    <path
      :style="{ strokeDashoffset: strokeDashoffsetStyles.logo4 }"
      class="path-logo4"
      :class="{ 'path-logo4-reverse': reverseClasses.logo4 }"
      d="M168 55.5C160.495 75.1572 149.975 101.55 148.245 105.886C148.078 106.306 147.935 106.717 147.806 107.15L139.625 134.581C139.542 134.86 139.476 135.101 139.409 135.385C138.189 140.564 125.116 196.082 127.5 187.5C129.973 178.595 142.324 134.7 150.718 100.107C150.898 99.3658 151.126 98.6561 151.435 97.9591C153.303 93.7455 160.814 77.9218 170.5 72.5C176.538 69.1199 180.611 66.8473 187.5 67.5C192.734 67.9959 196.364 68.7024 200 72.5C203.085 75.7224 204.129 78.5542 204.5 83C204.84 87.079 202.509 92.2018 201.257 94.6179C200.774 95.5506 200.141 96.3863 199.426 97.1562C198.08 98.6068 195.765 101.104 194.25 102.75C192.183 104.996 188.626 107.555 188.073 107.948C188.023 107.984 187.981 108.013 187.93 108.047C187.025 108.659 177.541 115.002 170.5 117C164.972 118.568 161.491 119.693 156 118C152.377 116.883 148 114 148 114"
      stroke="white"
      stroke-width="13"
      stroke-linecap="round"
      pathLength="1"
    />
  </svg>
</template>

<style scoped>
path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}
.path-logo1 {
  transition: stroke-dashoffset 0.5s ease-out;
}
.path-logo2 {
  transition: stroke-dashoffset 0.7s ease-out 0.5s;
}
.path-logo3 {
  transition: stroke-dashoffset 1s ease-out 1.2s;
}
.path-logo4 {
  transition: stroke-dashoffset 1s ease-out 2.2s;
}
.path-logo1-reverse {
  transition-delay: 1.2s;
  transition-duration: 0.2s;
}
.path-logo2-reverse {
  transition-delay: 0.9s;
  transition-duration: 0.3s;
}
.path-logo3-reverse {
  transition-delay: 0.5s;
  transition-duration: 0.4s;
}
.path-logo4-reverse {
  transition-delay: 0s;
  transition-duration: 0.5s;
}
</style>
