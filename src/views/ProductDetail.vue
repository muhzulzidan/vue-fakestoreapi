<template>
    <div v-if="product" class="p-4 flex gap-4 w-full">
        <img :src="product.image" :alt="product.title" class="w-1/6 h-fit">
        <div class="flex flex-col">
            <h2 class="text-2xl mt-4">{{ product.title }}</h2>
            <p class="mt-2">{{ product.description }}</p>
            <p class="text-xl mt-4 font-semibold">Price: ${{ product.price }}</p>

            <button @click="showCheckout = true" class="mt-4 bg-blue-500 text-white p-2 rounded">Proceed to
                Checkout</button>

            <div v-if="showCheckout" class="mt-4 p-4 border rounded">
                <h3 class="text-xl">Fake Payment</h3>
                <input type="text" placeholder="Name on card" class="mt-2 p-2 border rounded">
                <input type="text" placeholder="Card number" class="mt-2 p-2 border rounded">
                <button @click="handlePayment" class="mt-4 bg-green-500 text-white p-2 rounded">Pay</button>
            </div>
        </div>
    </div>
    <div v-else class="p-4 animate-pulse flex w-full ">
            <!-- Skeleton for the product image -->
            <div class="w-2/6 h-48 bg-emerald-200 rounded"></div>

            <!-- Skeleton for the product details -->
            <div class="flex flex-col ml-4 space-y-4 w-full">
                <div class="h-6 w-1/2 bg-emerald-200 rounded"></div> 
                <div class="h-4 w-3/4 bg-emerald-200 rounded"></div> 
                <div class="h-4 w-1/4 bg-emerald-200 rounded"></div> 
                <div class="h-12 w-1/4 bg-emerald-200 rounded"></div> 
            </div>
        </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProductById } from '@/components/services/productService';
import type { Product } from 'env';
import { useRoute } from 'vue-router';

export default {
    name: 'ProductDetail',
    setup() {
        const route = useRoute();
        const product = ref<Product | null>(null);
        const showCheckout = ref<boolean>(false); 

        onMounted(async () => {
            const id = route.params.id as string;
            try {
                product.value = await fetchProductById(Number(id));
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        });

        const handlePayment = () => {
            alert("Fake payment processed!");
            showCheckout.value = false; 
        }

        return { product, showCheckout, handlePayment };
    }
};
</script>
``
