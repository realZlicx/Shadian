<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <div v-else class="grid h-full text-black place-content-center">
        <h2>Loading...</h2>
    </div>
</template>


<script setup>
const story = await useStoryblok('home', { version: 'draft' });
onMounted(() => {
    console.log(story)
})

</script>
 
