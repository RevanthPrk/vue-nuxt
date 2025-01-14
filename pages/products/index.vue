<template>
  <div>
    <h4>Products</h4>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
definePageMeta({
  layout: "products"
})

useHead({
  title: 'Products',
  meta: [
    {
      name: 'description',
      content: 'List of products'
    }
  ]
})

const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>