<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex sticky p-4 text-xl justify-between items-center border ">
    <RouterLink to="/">
        <img alt="Vue logo" class="w-12 h-12" src="@/assets/logo.svg" width="125" height="125" />
    </RouterLink>
    <div class="wrapper">
      <nav class="flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>
