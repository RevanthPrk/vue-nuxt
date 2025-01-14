<template>
    <div class="card text-center flex flex-col items-center">
        <img :src="product.image" :alt="product.title" class="thumb h-24 w-24" />
        <p class="font-bold text-gray-500 m-4 w-48 truncate">{{ product.title }}</p>
        <NuxtLink :to="'/products/' + product.id" class="btn">View Details</NuxtLink>
        <!-- <p>{{ product.description }}</p>
        <p>{{ product.price }}</p> -->
    </div>
</template>

<script setup lang="ts">
const {product} = defineProps(['product'])
</script>