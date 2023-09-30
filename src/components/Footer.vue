<template>
  <footer class="bg-gray-800 text-white py-6 mt-auto">
    <div class="container mx-auto text-center">
      <p>&copy; {{ currentYear }} vue shopify lite. All rights reserved.</p>
      <nav class="mt-4 space-x-4">
        <a href="#" class="hover:text-gray-400">Terms of Service</a>
        <a href="#" class="hover:text-gray-400">Privacy Policy</a>
        <a href="#" class="hover:text-gray-400">Support</a>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  name: 'Footer',
  setup() {
    const currentYear = ref(new Date().getFullYear());

    return { currentYear };
  }
};
</script>


