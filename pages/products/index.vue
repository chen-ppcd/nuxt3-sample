<template>
  <!-- title -->
  <section class="mb-8">
    <h2 class="text-green-500 text-xl">Nuxt3 Sample - Products</h2>
    <p class="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita cumque iusto, dolore
      alias praesentium odit nostrum! Commodi tempore adipisci aut, labore aliquam ipsam tempora error, minima, enim
      atque quae quod.</p>
  </section>
  <!-- end of title -->

  <!-- categories -->
  <ProoductCategory />

  <!-- products counter -->
  <section v-if="!pending" class="my-5 md:text-right">
    <p class="text-gray-600">Showing {{ products?.length }} products</p>
  </section>
  <!-- end of products counter -->

  <!-- list of cards -->
  <section v-if="!pending" class="grid md:grid-cols-4 grid-cols-1 gap-4">
    <template v-for="product in products" :key="product?.id">
      <!-- card -->
      <ProductCard :product="product"></ProductCard>
    </template>
  </section>
  <!-- end of list of cards -->

  <!-- fetching state -->
  <section v-else class="mt-12">
    <p class="text-center">Please wait ...</p>
  </section>
  <!-- end of fetching state -->
</template>

<script setup lang="ts">

useHead({
  title: 'Nuxt3 Sample - Products',
  meta: [
    { name: 'description', content: 'Nisi irure est eiusmod sit in Lorem Lorem proident pariatur laboris est ex ad esse.' }
  ]
})

const products = computed(() => useProductStore().products)
const pending = computed(() => useProductStore().pending)

</script>