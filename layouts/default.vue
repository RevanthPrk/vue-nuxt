<template>
    <header class="shadow-md bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <nuxt-link to="/" class="font-bold">Home</nuxt-link>
          <ul class="flex space-x-4">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products" class="btn">Products</nuxt-link>
            </li>
          </ul>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot />
    </div>
  </template>
  
  <script setup lang="ts"></script>
  