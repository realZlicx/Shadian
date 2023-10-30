<template>
    <header class="w-full h-screen relative" v-editable="blok">
        <div class="w-full h-full overflow-clip">
            <img src="@/assets/background-grid.svg" class="h-full w-full object-cover" alt="">
        </div>
        <img src="@/assets/gradient-left.svg" class="absolute bottom-0 left-0 blur-md" alt="">
        <img src="@/assets/gradient-right.svg" class="absolute top-0 right-0 blur-md" alt="">
        <div class="h-full w-full grid place-content-center absolute top-0 ">
            <div class="text-8xl font-semibold font-agrandir">
                <div>{{ blok.headingone }}</div>
                <div class="gradient-text">{{ blok.headingtwo }}</div>
                <div>{{ blok.headingthree }}</div>
                <div>{{ blok.headingfour }}</div>
            </div>
            <div class="text-sm text-[#8e8d8d]">Risus commodo id odio turpis pharetra elementum. Pulvinar porta
                <br> porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            </div>
            <div class="flex items-center gap-x-3 mt-5">
                <input type="text" placeholder="Email"
                    class="py-3 text-sm border-white rounded-full w-72 px-4 border bg-transparent placeholder:text-white">
                <button class="bg-[#ffa800] text-xs px-5 py-3.5 rounded-full uppercase text-black">Attract</button>
            </div>
        </div>
    </header>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>


<style scoped>
.gradient-text {
    background: linear-gradient(218deg, #9DE8EE 25.05%, #9DE8EE 25.05%, #FA7C0B 51.71%, #9F8CED 79.45%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>