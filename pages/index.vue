<template>
  <div>
    <!-- <h4>Home</h4> -->
    <p>{{ data?.message }}</p>
  </div>
</template>

<script setup lang="ts">
const {data} = await useFetch('/api/ninja?name=Revanth', {
  method: 'post',
  body: {role: 'Vue JS Developer'}
})
</script>
