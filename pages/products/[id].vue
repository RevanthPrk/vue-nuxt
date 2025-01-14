<template>
    <Head>
        <Title>Product Details | {{ product.title }}</Title>
    </Head>

    <ProductDetails :product="product" />   
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

// Get the product ID from the route params
const route = useRoute();
const id = computed(() => route.params.id);

// Fetch product data using useAsyncData
const { data: product, error } = await useAsyncData('fetchProduct', () => 
  $fetch(`/api/products/${id.value}`)
);

// Handle errors
if (error.value) {
  console.error('Error fetching product:', error.value);
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  });
}

// Define page meta
definePageMeta({
  layout: 'products',
});
</script>
