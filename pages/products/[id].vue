<template>

  <Head>
    <Title>Nuxt3 Sample | {{ useProductStore().product?.title }}</Title>
    <Meta name="description" :content="useProductStore().product?.description">
    </Meta>
  </Head>
  <!-- detail -->
  <ProductDetail :product="useProductStore().product!"></ProductDetail>
</template>

<script setup lang="ts">
// get param ID
const { id } = useRoute().params
await useAsyncData('product' + id, () => useProductStore().getProductById(id as string))
</script>
