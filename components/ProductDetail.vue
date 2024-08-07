<template>
    <section class="bg-white p-12 rounded-lg border flex flex-col md:flex-row gap-12">
        <!-- image -->
        <div class="md:w-4/12">
            <NuxtImg preset="avatar" :src="product?.image" quality="80" format="webp" preload loading="lazy"></NuxtImg>
        </div>

        <!-- detail -->
        <div class="flex flex-col gap-7 md:w-8/12">
            <div>
                <p class="text-green-500">Product</p>
                <h1 class="text-3xl font-semibold">{{ product?.title }}</h1>
            </div>
            <div>
                <p class="text-green-500">Price</p>
                <h1 class="text-3xl font-semibold">${{ product?.price }}</h1>
            </div>
            <div>
                <p class="text-green-500">Description</p>
                <h1 class="text-sm text-gray-500">{{ product?.description }}</h1>
            </div>
            <!-- action -->
            <div>
                <AddToCart :product-id="product.id ?? 0" :title="product.title" :price="product.price ?? 0"></AddToCart>
            </div>
        </div>
        
    </section>
</template>

<script setup lang="ts">

import { Product } from '~/types/product'

const props = defineProps({
    product: {
        type: Object as () => Product,
        required: true
    }
})


</script>