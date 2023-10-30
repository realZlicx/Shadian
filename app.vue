<template>
  <div class="w-full bg-[#100f0f] text-white">
    <NuxtPage></NuxtPage>
    <AppNav></AppNav>
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})
</script>

<style >
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  outline: none;
}

html,
body {
  width: 100%;
  font-family: 'Agrandir Grand';
}

html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>