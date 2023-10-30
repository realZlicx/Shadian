<template>
    <nav class="w-full px-10 flex justify-between xl:px-14 fixed top-0 py-6 bg-[#100f0f] bg-opacity-80 backdrop-blur-sm font-agrandir">
        <div class="flex gap-x-8 items-center">
            <img src="@/assets/logo.svg" class="h-12 " alt="">
            <span class="text-white font-bold"> Shadient.co</span>
        </div>

        <div class="flex items-center gap-x-8 font-semibold">
            <div class="text-white cursor-pointer items-center gap-x-3 flex">
                Company
                <img class="h-5 " src="@/assets/icons/chevron-down.svg" alt="">
            </div>
            <div class="text-white">
                Services
            </div>
            <div class="text-white">
                Resources
            </div>
            <div
                class="border-2 border-[#ffa800] hover:bg-[#ffa800] hover:text-white transition-all duration-700 cursor-pointer text-[#ffa800] py-2 rounded-3xl px-6">
                Contact
            </div>
        </div>

    </nav>
</template>

<script setup>

</script>
