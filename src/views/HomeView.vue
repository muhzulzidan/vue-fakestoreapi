
<template>
  <main>

    <div class="bg-gradient-to-r bg-emerald-700 text-white text-center py-20">
      <h2 class="lg:text-5xl text-3xl font-bold mb-4">Welcome to Our Shop</h2>
      <p class="lg:text-2xl text-lg mb-8">Discover our exclusive range of products</p>
      <a href="#shopNow" class="bg-white text-black px-8 py-3 font-bold rounded-full hover:bg-opacity-90 ">Shop Now</a>
    </div>


    <div class="flex flex-col items-center space-y-4 py-12 px-4" id="shopNow">
      <h3 class="text-3xl flex self-start font-bold ">Products</h3>
      <div v-if="isLoading" class="w-full grid grid-cols-3 space-x-4">
        <div v-for="i in 3" :key="i"
          class="flex flex-col items-start space-y-2 shadow rounded-xl border p-4 animate-pulse">
          <div class="w-24 h-24 bg-emerald-200 rounded"></div>
          <div class="h-4 w-3/4 bg-emerald-200 rounded"></div>
          <div class="h-3 w-full bg-emerald-200 mt-2 rounded"></div>
          <div class="h-3 w-1/2 bg-emerald-200 mt-1 rounded"></div>
          <div class="h-4 w-1/4 bg-emerald-200 mt-2 rounded"></div>
        </div>
      </div>
      <swiper v-else class="w-full pr-12" :space-between="16"
        :breakpoints="{ 300: { slidesPerView: 1 }, 900: { slidesPerView: 3, } }">
        <swiper-slide v-for="product in products" :key="product.id"
          class="flex flex-col items-start space-y-2 shadow rounded-xl border p-4">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
            <img :src="product.image" :alt="product.title" class="w-24 h-24 object-cover">
            <h2 class="text-lg line-clamp-1 font-medium">{{ product.title }}</h2>
            <p class="text-sm line-clamp-3">{{ product.description }}</p>
            <p class="text-base font-semibold">Price: ${{ product.price }}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { fetchAllProducts } from '@/components/services/productService';
import type { Product } from 'env';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const products = ref<Product[]>([]);
    const isLoading = ref(true); // <-- Add this line

    onMounted(async () => {
      try {
        products.value = await fetchAllProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        isLoading.value = false; // <-- Add this line
      }
    });

    return { products, isLoading };
  }
};

</script>

