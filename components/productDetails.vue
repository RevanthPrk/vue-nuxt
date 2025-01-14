<template>
    <div>
        <h4>Product Details</h4>
        <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" :alt="product.title" class="mx-auto my-7 w-48 h-48" />
            </div>
            <div class="p-7">
                <h4 class="text-2xl my-7 font-bold">{{ product.title }}</h4>
                <p class="text-lg my-7 text-gray-500">{{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
const {product} = defineProps(['product'])
</script>