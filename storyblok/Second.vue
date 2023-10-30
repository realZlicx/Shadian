<template>
    <section class="w-full py-32 bg-black ">
        <div class="grid grid-cols-2 px-10 xl:px-20">
            <div class="text-4xl 2xl:text-5xl font-agrandir">{{ blok.descriptionleft }} <br> {{ blok.descriptionlefttwo }}</div>
            <div class="text-[#FFFFFF99] 2xl:pr-[5%] text-xl font-agrandir">{{ blok.descriptionright }}</div>
        </div>
        
        <img src="@/assets/layout.svg" class="w-full mt-20 object-cover" alt="">
    </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>