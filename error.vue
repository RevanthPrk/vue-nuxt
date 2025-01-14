<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-3xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-2xl">Oooops!!</p>
        <p class="mt-7">{{ error.message }}</p>
        <button @click="handleError" class="btn my-7">Go Home</button>
    </div>
</template>
<script setup lang="ts">
defineProps(['error'])

const handleError = () => {
    clearError({redirect: '/'})
}
</script>